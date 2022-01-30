var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Online! aija;sf alkfalkjfla flkjfldkj ldkfj sldkfj;dlk fldkfjdlkf jldkfjdlkj dkfljdlkj");
});
server.listen();