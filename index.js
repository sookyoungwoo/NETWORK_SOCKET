console.log("노드js 시작!")

var http = require("http")
var url = require("url");

http.createServer( (req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    if(pathname ==="/start") {
        res.setHeader("Content-Type', 'text/html");
        res.write("Hello");
        res.end();
    }
    else if(pathname === "/finish"){
        res.setHeader('Content-Type', 'text/html');
        res.write("Goodbye");
        res.end();
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 Not Found");
        }
        }
    ).listen(3000);
    console.log("Server has started");