'use strict';
var async = require('async');
const output = require('../helper/api');
const requestModel = require('../model/request.model');
const stockModel = require('../model/availabilities.model');
const userModel = require('../model/login.model');
const volunteersModel = require('../model/volunteers.model');
const returnModel = require('../model/return.model');
const moment = require('moment');




const util = require("util");
const multer = require('multer');
const availabilitiesModel = require('../model/availabilities.model');
var time;
var time2;


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image_storage')
    },
    filename: function (req, file, cb) {
        time = file.fieldname + '-' + Date.now() + '.png';
        cb(null, time)
        time2 = "http://127.0.0.1/image_storage/" + time
        console.log("http://127.0.0.1/image_storage/" + time)

    }
});

const upload = multer({ storage: storage }).single('item_img');


function uploadAsync(req, res) {
    return new Promise(function (resolve, reject) {
        upload(req, res, function (err) {
            if (err !== null) return reject(err);
            resolve();
        });
    });
}

class TicketController {
    constructor(con) {
        this.config = con;
        // this.test()
    }

    test(req, res, callback) {
        console.log("test")
        return "dt"
    }

    multer_testing(req, res) {
        // try{
        // output.ok(req, res, "result2", "catagory added", 0)
        upload(req, res, function (err) { console.log(req.body); output.ok(req, res, time2, "catagory added", 0) })
        // var resp = await Uploader(req, res);
        // dd = this.test();
        //  let data = upload(req,res);
        //  console.log(data)
        //  output.ok(req, res, "time2", "catagory added", 0)
        // } catch(ex){
        //     output.serverError(req, res, ex)
        // }
    }
    search(req, res) {
        try {
            if (req.params.search) {
                let search_key = req.params.search + '%';
                db.query(select.search_name, search_key, (err, result) => {
                    if (err) console.log(err)
                    output.ok(req, res, result, "search name", 0)
                })
            } else { output.ok(req, res, [], "invalid values", 1) }
        } catch (ex) { output.serverError(req, res, ex) }
    }

    async returnAvailability(req, res) {
        try {
            let returnAv = await returnModel(req.body)
            returnAv.save(async (err, data) => {
                if (err) throw err
                await stockModel.updateMany({}, { $inc: { "available_oxygen_cylinder": req.body.available_oxygen_cylinder, "available_oxy_meters": req.body.available_oxy_meters } }, { upsert: true })
                var socket = req.app.get('socketIo');
               socket.emit('availableStock', data);
                output.ok(req, res, data, "search name", 0)
            })
        } catch (ex) { output.serverError(req, res, ex) }
    }

    async getDashboard(req, res) {
        // var socket = req.app.get('socketIo');
        // socket.emit('user joined', 'world');

        async.parallel({
            todayCount: function (callback) {
                let convert_date_start = moment.utc().format('YYYY-MM-DD 00:00:00');
                let convert_date_end = moment.utc().format('YYYY-MM-DD 23:59:59');
                requestModel.find(
                    {
                        $and: [
                            {
                                create_time: {
                                    // $gte: convert_date_start,
                                    $lte: convert_date_end
                                }
                            }, {
                                "status": "delivered"
                            }
                        ]
                    }
                )
                    .exec(async (err, data) => {
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};
                        // console.log(ss,"daatadadt")

                        callback(null, ss)
                    })
            },
            totalCount: function (callback) {
                requestModel.find({ status: "delivered" })

                    .exec((err, data) => {
                        if (err) callback(err, data)
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};

                        callback(null, ss)
                    })
            },
            totalReturn: function (callback) {
                returnModel.find({})
                    .exec((err, data) => {
                        if (err) callback(err, data)
                        let ss =  (data.length) ? data.reduce((a, b) => ({"available_oxygen_cylinder": a.available_oxygen_cylinder + b.available_oxygen_cylinder,"available_oxy_meters": a.available_oxy_meters + parseInt(b.available_oxy_meters)})):{};
                        callback(null, ss)
                    })
            },
            todayReturn: function (callback) {
                let convert_date_start = new Date(moment().format('YYYY-MM-DD 00:00:00'));
                let convert_date_end = new Date(moment().format('YYYY-MM-DD 23:59:59'));

                requestModel.aggregate([
                    {
                        $match: {
                            $and: [ { act_return_date: {$gte:convert_date_start} }, { act_return_date: {$lte:convert_date_end} }]
                        }
                    },
                    {
                        $group: {
                            _id:1,
                            oxygen_concentrator: {$sum: '$Number_of_cylinder'},
                            pulse_oxymeter: {$sum: '$Number_of_monitorKid'}
                        }
                    }
                ])

                .exec((err, data) => {
                    let ss = {};
                    if(data && data[0]) {
                        ss =  { "available_oxygen_cylinder": data[0].oxygen_concentrator ,"available_oxy_meters": data[0].pulse_oxymeter };
                    }
                    callback(null, ss)
                })
            },
        }, function (err, results) {
            if (err) { output.serverError(req, res, err) } else { output.ok(req, res, results, "saved", 1) }
        });

    }

    getReports(req, res) {
        async.parallel({
            all: function (callback) {
                requestModel.find({ })

                    .exec(async (err, data) => {
                        
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};
                        // console.log(ss,"daatadadt")

                        callback(null, ss)
                    })
            },
            open: function (callback) {
                requestModel.find({ status: "open" })

                    .exec(async (err, data) => {
                        
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};
                        // console.log(ss,"daatadadt")

                        callback(null, ss)
                    })
            },
            rejected: function (callback) {
                requestModel.find({ status: "rejected" })

                    .exec((err, data) => {
                        if (err) callback(err, data)
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};

                        callback(null, ss)
                    })
            },
            delivered: function (callback) {
                requestModel.find({ status: "delivered" })

                    .exec((err, data) => {
                        if (err) callback(err, data)
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};
                        
                        callback(null, ss)
                    })
            },
            closed: function (callback) {
                requestModel.find({ status: "closed" })
               
                .exec((err, data) => {
                    let ss = {};
                    if(data && data[0]) {
                        let ss =  (data.length) ? data.reduce((a, b) => ({"Number_of_cylinder": a.Number_of_cylinder + parseInt(b.Number_of_cylinder),"available_oxy_meters": a.Number_of_monitorKid + (b.Number_of_monitorKid)?parseInt(b.Number_of_monitorKid):0})):{};

                    }
                    callback(null, ss)
                })
            },
        }, function (err, results) {
            console.log(results,"results")
            if (err) { output.serverError(req, res, err) } else { output.ok(req, res, results, "saved", 1) }
        });
      
    }

    getAvailabilities(req, res) {
        stockModel.findOne({})
            .exec((err, data) => {
                if (err) output.serverError(req, res, err);
                else {
                    output.ok(req, res, data, "data", 1)

                }
            })
    }

    saveStock(req, res) {
        try {
            if (Object.keys(req.body).length) {
                stockModel.updateMany({}, { $set: { "available_oxygen_cylinder": req.body.cylinder, "available_oxy_meters": req.body.meter } }, { upsert: true })
                    .exec((err, data) => {
                        console.log(err, data)
                        if (err) output.serverError(req, res, err);
                        else {
                            if (data) {
                                var socket = req.app.get('socketIo');
                                socket.emit('availableStock', data);
                                output.ok(req, res, { status: true }, "saved", 1)
                            } else {
                                output.ok(req, res, { status: false }, "saved", 0)
                            }
                        }
                    })
            } else {
                throw "Invalid Message"
            }
        } catch (ex) { output.serverError(req, res, ex) }
    }

    newReq(req, res) {
        try {
            // console.log( req.params.phoneNumber,"sljjfksjdbfjk")
            // let search_key = req.params.search + '%';
            userModel.findOne({ $and: [{ phoneNumber: { $regex: req.params.phoneNumber, $options: "i" } }, { otp_verify: true }] })
                .exec((err, data) => {
                    console.log(err, data)
                    if (err) output.serverError(req, res, err);
                    else {
                        if (data) {
                            let newReq = new requestModel(req.body)
                            newReq.save((err, data) => {
                                if (err) output.serverError(req, res, err);
                                else {
                                    // if (data) {
                                    output.ok(req, res, data, "saved", 1)
                                    // }
                                }
                            })
                        } else {
                            output.ok(req, res, { status: false }, "No record found", 0)
                        }
                    }
                })
        } catch (ex) { output.serverError(req, res, ex) }
    }

    listOfReq(req, res) {
        try {
            // console.log( req.params.phoneNumber,"sljjfksjdbfjk")
            // let search_key = req.params.search + '%';
            requestModel.aggregate([
                {
                    $lookup:
                    {
                        from: "logins",
                        localField: "phoneNumber",
                        foreignField: "phoneNumber",
                        as: "user_details"
                    }
                },
                { $unwind: "$user_details" }

            ])
                .exec((err, data) => {
                    if (err) output.serverError(req, res, err);
                    else {
                        if (data) {
                            output.ok(req, res, data, "saved", 1)
                        } else {
                            output.ok(req, res, { status: false }, "saved", 0)
                        }
                    }
                })
        } catch (ex) { output.serverError(req, res, ex) }
    }


    async approveReq(req, res) {
        try {
            let stock = await stockModel.findOne()
            // console.log(stock,"stock")
            // res.send(stock)
            if (stock.available_oxygen_cylinder > 0) {
                async.parallel({
                    updateStock: async (callback) => {
                        stock.available_oxygen_cylinder = stock.available_oxygen_cylinder - req.body.Number_of_cylinder;
                        stock.available_oxy_meters = (stock.available_oxy_meters > 0) ? stock.available_oxy_meters - req.body.Number_of_monitorKid : 0;
                        stock.save()

                        callback(null, stock)
                    },
                    reqUpdate: async (callback) => {
                        var today = new Date();

                        let data = await requestModel.findByIdAndUpdate({ _id: req.body._id }, { $set: { "status": "delivered", approve_reject_date: new Date(), exp_return_date: today.setDate(today.getDate() + 7)} })
                        callback(null, data)


                    },
                    updateUser: async (callback) => {
                        // send msg to user
                        callback(null, stock)
                    },
                    updateVolunteer: (callback) => {
                        // userModel.findOne({ phoneNumber: req.body.phoneNumber })
                        //     .exec((err, user) => {
                        //         if (err) callback(err, [])
                        //         else {
                        //             volunteersModel.find({}, { phoneNumber: 1, _id: -1 })
                        //                 .exec((err, data) => {
                        //                     callback(null, stock)
                        //                     // send msg
                        //                 })
                        //         }
                        // })
                        callback(null, stock)

                    },
                },
                    (err, result) => {
                        // if (err) output.invalid(req, res, err)
                        // let result = []
                        var socket = req.app.get('socketIo');
                        socket.emit('availableStock', stock);
                        output.ok(req, res, result, "catagory list", 0)
                    }
                )
            } else {
                throw "NO stock"
            }
        } catch (ex) { output.serverError(req, res, ex) }
    }

    async rejectReq(req, res) {
        try {
            let stock = await stockModel.findOne()
            async.parallel({
                reqUpdate: async (callback) => {
                    let data = await requestModel.findByIdAndUpdate({ _id: req.body._id }, { $set: { "status": "rejected", reason: req.body.reason, approve_reject_date: new Date() } })
                    console.log(data);
                    callback(null, data)


                },
                updateUser: async (callback) => {
                    // send msg to user
                    callback(null, stock)
                }
            },
                (err, result) => {
                    // if (err) output.invalid(req, res, err)
                    // let result = []
                    var socket = req.app.get('socketIo');
                    socket.emit('availableStock', stock);
                    output.ok(req, res, result, "rejected booking", 0)
                }
            )
        } catch (ex) { output.serverError(req, res, ex) }
    }

    async closeReq(req, res) {
        try {
            let stock = await stockModel.findOne()
            async.parallel({
                reqUpdate: async (callback) => {
                    let data = await requestModel.findByIdAndUpdate({ _id: req.body._id }, { $set: { "status": "closed", act_return_date: new Date() } })
                    callback(null, data)

                },
                updateUser: async (callback) => {
                    // send msg to user
                    callback(null, stock)
                }
            },
                (err, result) => {
                    // if (err) output.invalid(req, res, err)
                    // let result = []
                    var socket = req.app.get('socketIo');
                    socket.emit('availableStock', stock);
                    output.ok(req, res, result, "closed booking", 0)
                }
            )
        } catch (ex) { output.serverError(req, res, ex) }
    }

}
module.exports = new TicketController();
