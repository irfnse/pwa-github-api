const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();
// untuk menjalankan /dist
app.use(serveStatic(__dirname + "/dist"));
// menagtur port
var port = process.env.PORT || 8080;
app.listen(port);