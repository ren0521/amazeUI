const express = require('express');
const app = express();
const router = require('./routers/router')

app.engine('html', require('express-art-template'))
app.use('/assets/',express.static('assets'))

app.use(router)
app.use(function (req, res, next) {
    res.render('404.html')
})

app.listen('3000',function () {
    console.log('启动成功')
})