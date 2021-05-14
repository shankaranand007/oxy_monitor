const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}/oxy_monitoring`);

let notification = new Schema({
    message:{type:String,required:true},
    title:{type:String,required:true},
    mobile_number:{type:Array,required:true},
    trigger_time:{type:Date,required:true},
    create_time:{type:Date,default:Date.now}
});


// Export the model
module.exports = mongoose.model('notification', notification);
