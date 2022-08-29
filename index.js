const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const events = require('./scripts/events')

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
    users: users,
    user: user
  }

  await res.render('index', viewData )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 write bash script
 make ApI end point 
 get expess to run that script


 https://www.geeksforgeeks.org/node-js-child-process/
const { exec } = require('child_process'); //spends bash shell

exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});

 */


