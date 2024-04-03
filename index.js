const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./route')  

require('dotenv').config()


const app = express()
app.use(cors())
const db = process.env.MONGODB_URL;

mongoose.connect(db)
.then(console.log('connected to database'))
.catch((error)=>{
    console.log('Failed to connect to the database')
    console.log(error)
})
app.use(express.json())
app.use(route)
const port = 3000

app.listen(port,()=>{
    console.log(`server is runnnign in port ${port}`)
})


