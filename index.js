const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

function logger(req, res, next) {
    console.log(`request recieved at ${parseInt(Date.now()/100)}`)
    next()
}
app.use(logger)

// function getName(name) {
//   const name = document.getElementsById('name').val
//   return name
// }

app.get('/', async function (req, res) {
  let names = ['Trav', 'Joe', 'another', 'another guy']
  const viewData = {
    names: names
  }
   await res.render('index', viewData)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})