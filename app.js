var express = require('express'),
    cors = require('cors');
var app = express();
var fs = require('fs');
var dir = './dist/config';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
var port = '4200';

app.use(cors());

app.use(express.static('dist', {
    maxAge: 1209600 //2 weeks, pretty aggressive currently, will relax once the app stabilize
}));

app.listen(port, function () {
    console.log('Robot listening on port: '+ port + '!');
});