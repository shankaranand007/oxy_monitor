'use strict';
// const db = require('../../bin/database');
var async = require('async');
// const select = require('../queries/select');
// const insert = require('../queries/insert');
// const update = require('../queries/update');
// const dele = require('../queries/delete');
const output = require('../helper/api');
// const Uploader = require('../helper/uploder');
const loginModel = require('../model/login.model');


const util = require("util");
const multer = require('multer');
var time;
var time2;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage')
    },
    filename: function (req, file, cb) {
        time = file.fieldname + '-' + Date.now() + '.png';
        cb(null, time)
        time2 = "http://127.0.0.1/storage/" + time
        console.log("http://127.0.0.1/storage/" + time)

    }
});

const upload = multer({ storage: storage }).single('img');


function uploadAsync(req, res) {
    return new Promise(function (resolve, reject) {
        upload(req, res, function (err) {
            if (err !== null) return reject(err);
            resolve();
        });
    });
}

class LoginController {
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

    sendsms(req, res) {
        // console.log("sms")
        // var msg91 = require('msg91-sms');
        const msg912 = require('sendotp');
        const msg91 = new msg912('338590AxCFHU9rFf5f326bf6P1','Hello, Your Verification Code is {{otp}}, please do not share it with anybody');
        let senderid = 'Zuqo';
        let dialcode = '';
        var route = 'Transactional';
        let current_time = new Date();
        // let exp_time = moment(current_time).add(30, 'minutes')
        // const otp = Math.floor(1000 + Math.random() * 9000)
        const otp = 1234

        let message = "Hello, Your Verification Code is " + otp;
        var num = '91' + req.params.phoneNumber;
        let number = num.toString();
        console.log(number)
        let mob_no = Number(number)
        msg91.send(number, senderid, otp, function (err,response) {
          console.log(err,response)
          loginModel.findOneAndUpdate({ phoneNumber: { $regex: req.params.phoneNumber, $options: "i" } }, { $set: { 'otp_verify': false, 'phoneNumber': req.params.phoneNumber, 'otp': otp } },{upsert:true})
            .exec((err, data) => {
              if (err) output.serverError(req, res, err);
              else output.ok(req, res, otp, "saved", 1)
            })
          // callback(null,response)
        });
      }

      verifyOTP(req,res){
        try {
            // console.log( req.params.phoneNumber,"sljjfksjdbfjk")
                // let search_key = req.params.search + '%';
                loginModel.findOneAndUpdate({ $and:[{phoneNumber: { $regex: req.params.phoneNumber, $options: "i" }},{otp:req.params.otp}]},{$set:{'otp_verify': true}})
                .exec((err, data) => {
                    console.log(err,data)
                  if (err) output.serverError(req, res, err);
                  else {
                      if(data){
                      output.ok(req, res, {status:true}, "saved", 1)
                      }else{
                      output.ok(req, res, {status:false}, "saved", 0)
                      }
                    }
                })
        } catch (ex) { output.serverError(req, res, ex) }
    }
    UpdateInfo(req,res){
        try {
            upload(req, res, (err) => {
                if (Object.keys(req.body).length) {
                    (req.file) ? req.body['Aadhaar'] = time2 : "no file";
                    new Promise((resolve, reject) => {

                        loginModel.findOneAndUpdate({ $and:[{phoneNumber: { $regex: req.params.phoneNumber, $options: "i" }},{otp_verify:true}]},{$set:req.body})
                        .exec((err, data) => {
                            console.log(err,data)
                          if (err) reject(output.serverError(req, res, err))
                          else {
                              if(data){
                                resolve(output.ok(req, res, data, "saved", 1))
                              }else{
                                resolve(output.ok(req, res, {status:false}, "Not able to find your id please regeister you phone number", 0))
                              }
                            }
                        })
                    })
                } else {
                    output.ok(req, res, [], "No Data found", 1)
                }
            });

                // let search_key = req.params.search + '%';
             
        } catch (ex) { output.serverError(req, res, ex) }
    }
    
    
}
module.exports = new LoginController();