const express = require('express')
const app = express()
const path = require('path')
const message = require('./routes/message')
const bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));


app.use('/' ,message)
app.listen(5000)