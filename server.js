var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
// untuk menjalankan /dist
app.use(serveStatic(__dirname + "/dist"));
// menagtur port
var port = process.env.PORT || 5000;
app.listen(port);