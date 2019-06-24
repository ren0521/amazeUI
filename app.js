const express = require('express');
const app = express();
const router = require('./routers/router')
var bodyParser = require('body-parser')

app.engine('html', require('express-art-template'))
app.use('/assets/',express.static('assets'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)
app.use(function (req, res, next) {
    res.render('404.html')
})

app.listen('3000',function () {
    console.log('启动成功')
})