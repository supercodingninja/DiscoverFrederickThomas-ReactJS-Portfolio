'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import likeRoute from './Routes/likeMe';
const uri = config.getSecretToken();

const app = express();
const Port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (res) => {
  return res.json({ message: 'Server Running' });
});

app.use('/likes', likeRoute);
app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});

mongoose
  .connect(uri)
  .then(function () {
    console.log('Moongose Connection Successful');
  })
  .catch(function (err) {
    console.log(err);
  });