const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}/oxy_monitoring`);

let volunteers = new Schema({
    phoneNumber:{type:String,required:true},
    alt_phoneNumber:{type:String},
    status:{type:Boolean,default:false},
    name:String,
    address1:String,
    address2:String,
    state:String,
    district:String,
    create_time:{type:Date,default:Date.now}
},{strict:false});


// Export the model
module.exports = mongoose.model('volunteer', volunteers);
