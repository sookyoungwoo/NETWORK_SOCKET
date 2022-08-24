console.log("nodejs fun fun fun start")

const http = require('http')
const url = require('url')
const fs = require('fs')

// res.write
// http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<body>');
//     res.write('<h1>Hello, World!</h1>');
//     res.write('</body>');
//     res.write('</html>');
//     res.end();
// }).listen(3000);

// url
// http.createServer((req, res) => {
//     let pathname = url.parse(req.url).pathname;
//     console.log("request for " + pathname + " received.");
//
//     if (pathname === "/start") {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Hello");
//         res.end();
//     } else if (pathname === "/finish") {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Good Bye");
//         res.end();
//     } else {
//         res.writeHead(404, {"Content-Type": "text/plain"});
//         res.end("404 Not Found");
//     }
// }).listen(3000)

// file system
const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
})

server.on('request', code => {
    console.log('Request Event');
})

server.on('connection', code => {
    console.log('Connection Event');
})

server.listen(3000, () => {
    console.log('3000 run');
})
