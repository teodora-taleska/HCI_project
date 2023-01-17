const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors= require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

// with this line of code we activated body parser in our app
app.use(express.json())
app.use(cors())
app.use('/', routeUrls)
app.listen(4000, ()=> console.log("Server is up and running"))