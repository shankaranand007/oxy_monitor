const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}/oxy_monitoring`);

let volunteer = new Schema({
    phoneNumber:{type:String,required:true},
    alt_phoneNumber:{type:String},
    status:{type:Boolean,default:true},
    Name:String,
    Gender:String,
    Address1:String,
    Address2:String,
    Address1:String,
    state:{type:String,required:true},
    pincode:{type:String,required:true},
    create_time:{type:Date,default:Date.now}
},{strict:false});


// Export the model
module.exports = mongoose.model('volunteer', volunteer);
