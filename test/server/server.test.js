let http = require('http');
let fs = require('fs');
let path = require('path');

let hostname = 'localhost';
let port = 3000;

let server = http.createServer(function(req, res) {
    console.log(req.headers);
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        let fileURL;

        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Test server main page</h1>
                <p>Please see <a href="/test.html">test.html</a> contructed for test purposes</p>`);
        } else {
            fileURL = req.url;
        }

        let filePath = path.resolve(`test/server/public/${fileURL}`);
        let fileExtension = path.extname(filePath);

        console.log(`[test-server]: Serving ${filePath} from the server to the client`);

        if (fileExtension === '.html') {
            fs.exists(filePath, function(exists) {
                if (!exists) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(`<h1>Error 404: ${fileURL} not found on the server</h1>`);

                    return;
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<h1>Error 404: ${fileURL} is not an HTML file</h1>`);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>Error 404: ${req.method} is not supported</h1>`);
    }

});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
