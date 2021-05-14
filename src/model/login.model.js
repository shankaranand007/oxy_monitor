const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}/oxy_monitoring`);

let login = new Schema({
    phoneNumber:{type:String,required:true},
    otp_verify:{type:Boolean,default:false},
    Patient_Name:String,
    Gender:String,
    Age:String,
    SPO2:String,
    Comorbidities:[],
    Symptoms:[],
    CovidSince:String,
    Address:String,
    Landmark:String,
    Aadhaar:String,
    otp:{type:Number},
    count:{type:Number,default:0},
    create_time:{type:Date,default:Date.now}
},{strict:false});


// Export the model
module.exports = mongoose.model('login', login);
