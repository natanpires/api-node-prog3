const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");
const { errorHandler } = require('./config/errorHandler')

const routes = require('./routes').default;
const app = express();

app.use(express.json())
app.set('sequelize', sequelize);

sequelize.sync({ force: true });

app.use('/', routes);
app.use(errorHandler);

app.get('/', function (_, response) {
  return response.send('API NODEJS - express')
})

app.listen(3000)

module.exports = { app }
