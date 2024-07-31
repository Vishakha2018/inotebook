// For connect with database 
const mongoose= require('mongoose')
const mongoURI= 'mongodb://localhost:27017/?readPreference=primary&directConnection=true'
// create async function then wherever we add await function then function will wait for promise resolve
// ()=>{} this is a callback function
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
// so whe can use thie function in other File
module.exports=connectToMongoDB;