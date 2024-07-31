const connectToMongoDB = require('./db');
const express = require('express')
connectToMongoDB();

const app = express()
const port = 3000
// we are creating end point here so when we hit api then we get hello world example
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// middleware.
app.use(express.json())


// explanation in auth.js
// available routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
