const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    _id : {
        type : String,
    },
    name :{
        type : String,
    },
    isOn : {
        type :Boolean,
    },
    // code and message are prperties to be sent to clien ,when a feature is off  
    code : {
        type : Number,
    },
    message : {
        type : String,
    } 
});
module.exports = mongoose.model('features',featureSchema);