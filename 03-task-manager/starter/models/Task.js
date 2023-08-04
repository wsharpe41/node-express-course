const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // Set up structure for every document
    name: {
      type:String,
      required:[true,'must provide name'],
      trim:true,
      maxlength:[50,'name max length is 50']  
    },
    completed: {
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Task',TaskSchema);