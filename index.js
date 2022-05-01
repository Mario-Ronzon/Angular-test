const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

var PORT = process.env.PORT || 5000;

app.listen(PORT);