const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-mltbf.mongodb.net/oministack?retryWrites=true',  {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // permite envio de arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));

app.use(require('./routes'));

app.listen(3333);