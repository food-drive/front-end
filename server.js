const express = require('express')
const proxy = require('express-http-proxy')
const path = require('path')
require('dotenv').config()

const port = process.env.PORT || 3000;

const app = express()

app
  .use(express.static(path.join(__dirname, 'build')))
  .use('/api', proxy(process.env.REACT_APP_API_URL))
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  .listen(port, () => console.log(`listening on port ${port}`));
