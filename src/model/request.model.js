const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}/oxy_monitoring`);
//open,delivered,return,close
let request = new Schema({
    phoneNumber:{type:String,required:true},
    Number_of_cylinder:Number,
    Number_of_monitorKid:Number,
    status:{type:String,default:"open"},
    create_time:{type:Date,default:Date.now}
},{strict:false});


// Export the model
module.exports = mongoose.model('request', request);
