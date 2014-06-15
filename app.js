var express = require('express');
var app = express();

var baseDir = __dirname + '/public';

app.use(express.static(baseDir));

app.listen(process.env.PORT || 3000);

