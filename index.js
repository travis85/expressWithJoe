const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

function logger(req, res, next) {
    console.log(`request recieved at ${parseInt(Date.now()/100)}`)
    next()
}
app.use(logger)


app.get('/', async function (req, res) {

    await res.render('index')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})