require('dotenv').config();
const app = require('./src/app');
const port = process.env.API_PORT || 8080;

app.listen(port, () => {
  console.log(`starcraft2-api-example listening on ${port}!`);
});
