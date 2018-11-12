const express = require('express');
const path = require('path');

const port = process.env.PORT;

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app
  .post('/api/login', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'login.json')));
  })
app
  .get('/api/user', (req, res) => {
    res.send(path.join(__dirname, 'api_mocks', 'user.json'));
  })
  .post('/api/aree', (req, res) => {
    res.send(path.join(__dirname, 'api_mocks', 'aree.json'));
  })
  .post('/api/capi_equipe', (req, res) => {
    res.send(path.join(__dirname, 'api_mocks', 'capi_equipe.json'));
  })
  .post('/api/catene', (req, res) => {
    res.send(path.join(__dirname, 'api_mocks', 'catene.json'));
  })
  .post('/api/colletta', (req, res) => {
    res.send(path.join(__dirname, 'api_mocks', 'colletta.json'));
  })
  .post('/api/supermercati', (req, res) => {
    res.send(path.join(__dirname, 'api_mocks', 'supermercati.json'));
  })

app
  .listen(port, () => console.log(`listening on port ${port}`));
