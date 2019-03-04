require('dotenv').config();

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const {
  env
} = process;

const app = express();
const port = env.API_SERVER_PORT;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.set('json spaces', 2);

require('./routes/index')(app);

module.exports = http.createServer(app).listen(port, () => {
  console.log(`API server started on port ${port}`);
});