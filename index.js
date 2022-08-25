const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

function logger(req, res, next) {
    console.log(`request recieved at ${parseInt(Date.now()/100)}`)
    next()
}
app.use(logger)


app.get('/', async function (req, res) {
  const header = 'what up stranger';
  const users = ['Trav', 'Joe', 'Danny'];
  const user = req.query.users;
  
  console.log(user)
  const viewData = {
    header: header,
    user: user
  }

  await res.render('index', viewData )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * pass params in url quiries
 * and use data as render
 * https://stackabuse.com/get-query-strings-and-parameters-in-express-js/

 */