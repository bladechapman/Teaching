
const fs = require('fs');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const PNG = require('pngjs').PNG;


const server = http.createServer(function (req, res) {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');

    var newfile = new PNG({width:100,height:100});

    for (var y = 0; y < newfile.height; y++) {
        for (var x = 0; x < newfile.width; x++) {
            var idx = (newfile.width * y + x) * 4;

            var col = x < (newfile.width / 2) ^ y < (newfile.height / 2) ? 0xe5 : 0xff;

            newfile.data[idx] = col;
            newfile.data[idx + 1] = col;
            newfile.data[idx + 2] = col;
            newfile.data[idx + 3] = 0xff;
        }
    }

    newfile.pack().pipe(res);
});

server.listen(port, hostname, function () {
    console.log(`Server listening at ${hostname}:${port}`);
});
