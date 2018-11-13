const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app
  .use('/colletta-new', express.static(path.join(__dirname, 'build')))
  .get('/colletta-new', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

app
  .post('/api/login', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'login.json')));
  })
  .get('/api/logout', (req, res) => {
    res.sendStatus(200);
  })
  .get('/api/get/user', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'user.json')));
  })
  .post('/api/get/aree', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'aree.json')));
  })
  .post('/api/get/capi_equipe', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'capi_equipe.json')));
  })
  .post('/api/get/capi_equipe_supermercati', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'capi_equipe_supermercati.json')));
  })
  .post('/api/get/catene', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'catene.json')));
  })
  .post('/api/get/colletta', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'colletta.json')));
  })
  .post('/api/get/supermercati', (req, res) => {
    res.send(require(path.join(__dirname, 'api_mocks', 'supermercati.json')));
  })
  .listen(port, () => console.log(`listening on port ${port}`));
