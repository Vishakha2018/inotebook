const mongoose = require('mongoose');
const {Schema}=mongoose;
const NotesSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default: 'General'
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// export module and then in model in mongoose.model we have to write mode name and schema name 

module.exports= mongoose.model('notes',NotesSchema)