const express = require('express');
const cors = require('cors');
const app = express;

const whitelist = ['http://localhost:3000', 'http://localhost:9000', 'http://DESKTOP-30E4D4N:3001', 'https://localhost:3443'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;

    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
        //callback(null,true);
    }
    else {
        corsOptions = { origin: false };
        //callback(null,"Not allowed by CORS");
    }
    callback(null,corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);