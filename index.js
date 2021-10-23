/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use('/', routes);

app.get('/', (req, res) => {
  res.send({
    rest_api: 'Divino Burger API',
  });
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
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
  console.log(`Example app listening at http://localhost:${port}`);
});
