const express = require('express');

const path = require('path');
const app = express();

let port = parseInt(process.env.PORT)
port = isNaN(port) ? 8080 : port;

app.use('/admin/', express.static(path.join(__dirname, '../build')));

app.get(['/','/*'], function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port);