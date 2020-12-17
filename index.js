const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser())
const models = require("./models");

require('./route/index')(app)

models
.sequelize
.sync()
.then(() => app.listen(3000, () => console.log(`App listening
on port 3000!`)));