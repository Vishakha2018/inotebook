// first import moongose
const mongoose = require('mongoose')
// we have to create schema here because we have to create record which user has logged in and create a notes
// copy paste from documentation of mongoose schemas
const { Schema } = mongoose;

const UserSchema = new Schema({

    // whatever field we need we can add and give its type and require true for mandatory fields
      // we can give default value as well like we are giving in date

  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    // unique:true, // this will ensure that email is unique in our collection

  },
  password:{
    type:String,
    required:true,
  },
  date:{
    // don't call now as a function we have to just pass function so write date.now not Date.now()
    type:Date,
    default:Date.now,  // this will automatically fill the current date when we create a new user record
  }

});

// export module and then in model in mongoose.model we have to write mode name and schema name 

module.exports=mongoose.model('user',UserSchema)

// schema means format in organize way according to that application will run in organize format