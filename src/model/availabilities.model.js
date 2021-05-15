const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}/oxy_monitoring`);

let availabilities = new Schema({
    available_oxygen_cylinder :Number,
    available_oxy_meters:Number,
    create_time:{type:Date,default:Date.now}
},{strict:false});


// Export the model
module.exports = mongoose.model('availabilities', availabilities);
