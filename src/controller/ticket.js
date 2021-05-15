'use strict';
// const db = require('../../bin/database');
var async = require('async');
// const select = require('../queries/select');
// const insert = require('../queries/insert');
// const update = require('../queries/update');
// const dele = require('../queries/delete');
const output = require('../helper/api');
// const Uploader = require('../helper/uploder');
const requestModel = require('../model/request.model');
const stockModel = require('../model/availabilities.model');
const userModel = require('../model/login.model');
const volunteersModel = require('../model/volunteers.model');




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

    // sendsms(req, res) {
    //     // console.log("sms")
    //     // var msg91 = require('msg91-sms');
    //     const msg912 = require('sendotp');
    //     const msg91 = new msg912('338590AxCFHU9rFf5f326bf6P1','Hello, Your Verification Code is {{otp}}, please do not share it with anybody');
    //     let senderid = 'Zuqo';
    //     let dialcode = '';
    //     var route = 'Transactional';
    //     let current_time = new Date();
    //     // let exp_time = moment(current_time).add(30, 'minutes')
    //     const otp = Math.floor(1000 + Math.random() * 9000)
    //     let message = "Hello, Your Verification Code is " + otp;
    //     var num = '91' + req.params.phoneNumber;
    //     let number = num.toString();
    //     console.log(number)
    //     let mob_no = Number(number)
    //     msg91.send(number, senderid, otp, function (err,response) {
    //       console.log(err,response)
    //       loginModel.findOneAndUpdate({ phoneNumber: { $regex: req.params.phoneNumber, $options: "i" } }, { $set: { 'otp_verify': false, 'phoneNumber': req.params.phoneNumber, 'otp': otp } },{upsert:true})
    //         .exec((err, data) => {
    //           if (err) output.serverError(req, res, err);
    //           else output.ok(req, res, data, "saved", 1)
    //         })
    //       // callback(null,response)
    //     });
    //   }
    addStock(req, res) {
        try {
            if (Object.keys(req.body).length) {
                stockModel.updateMany({}, { $inc: { "available_oxygen_cylinder": req.body.cylinder, "available_oxy_meters": req.body.meter } }, { upsert: true })
                    .exec((err, data) => {
                        console.log(err, data)
                        if (err) output.serverError(req, res, err);
                        else {
                            if (data) {
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
            userModel.findOne({ $and:[{phoneNumber: { $regex: req.params.phoneNumber, $options: "i" }},{otp_verify:true}]})
                .exec((err, data) => {
                    console.log(err, data)
                    if (err) output.serverError(req, res, err);
                    else {
                        if (data) {
                            let newReq = new requestModel(req.body)
                            newReq.save((err,data)=>{
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
            requestModel.find({})
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

        let stock = await availabilitiesModel.findOne()

        if (stock.available_oxygen_cylinder > 0) {
            async.parallel({
                updateStock: async (callback) => {
                    stock.available_oxygen_cylinder = stock.available_oxygen_cylinder - req.body.Number_of_cylinder;
                    stock.available_oxy_meters = (stock.available_oxy_meters > 0) ? stock.available_oxy_meters - req.body.Number_of_monitorKid : 0;
                    stock.save()
                    callback(null, stock)
                },
                reqUpdate: async (callback) => {
                    requestModel.findByIdAndUpdate({ _id: req.body._id }, { $set: { "status": "delivered" } })
                        .exec((err, data) => {
                            if (err) callback(err, [])
                            else {
                                callback(null, stock)
                            }
                        })

                },
                updateUser: async (callback) => {
                    // send msg to user
                    callback(null, stock)
                },
                updateVolunteer: (callback) => {
                    userModel.findOne({ phoneNumber: req.body.phoneNumber })
                        .exec((err, user) => {
                            if (err) callback(err, [])
                            else {
                                volunteersModel.find({}, { phoneNumber: 1, _id: -1 })
                                    .exec((err, data) => {
                                        callback(null, stock)
                                        // send msg
                                    })
                            }
                        })
                },
            },
                (err, result) => {
                    if (err) output.invalid(req, res, err)
                    // let result = []
                    output.ok(req, res, result, "catagory list", 0)
                }
            )
        } else {
            throw "NO stock"
        }
    } catch (ex) { output.serverError(req, res, ex) }

    }

}
module.exports = new TicketController();