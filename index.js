/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocs = require('./swagger.json');
const routes = require('./server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use('/', routes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.send({
    message: 'Essa é API do Divino Burger, seja bem vindo(a)! Para testá-la, você deve sinalizar a rota e o endpoint desejado (:',
  });
});

app.use((req, res, next) => {
  const error = new Error('Not Found.');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
