var http = require('http');
const { stringify } = require('querystring');

var app = http.createServer(function(req,res){

    var port = process.env.MATRIX_PORT || 8443
    var mserver = process.env.MATRIX_SERVER;
    
    if (!mserver) {
        mserver = "matrix."+req.headers.host.split(":")[0];
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "m.server" : mserver+":"+port }, null, 3));
});
app.listen(3000);
