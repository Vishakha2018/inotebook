const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res) => {
    //   const obj = {
    //   };
    //   res.json(obj);
    // undefined if we want to see req.body then we have to pass middleware in index.js then data will come
    console.log(req.body); 
    // res.send("Hello") hello

    // create a user using : POST "/api/auth/" by post request send the data to the server . doesnt require auth
    const user= User(req.body)
    user.save() // save user to database and send the user object as response .then(user => res.json(user)) 
    res.send(req.body)

});

module.exports = router;


// in this file we have defined a route for root path. when we hit http://localhost:3000/api/notes it will return an empty object {}
// const obj={ } will be defined in this file
// so first import express -> then from express use router() then in router.get -> pass root path / then call back function 
// -> return res that is json type or then ann -> after that export module router 
// then use this route in index.js with api and path define after that what path is need is defined in route
// app.use('/api/auth', require('./routes/auth'))
// /api/auth api 
// ./routes/auth path 
