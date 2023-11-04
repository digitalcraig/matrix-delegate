var http = require('http');
const { stringify } = require('querystring');

var app = http.createServer(function(req,res){

    var port = process.env.MATRIX_PORT || 8443
    var mserver = process.env.MATRIX_SERVER;
    var syncserver = process.env.SYNC_SERVER || null;
    var syncport = process.env.SYNC_PORT || 8443;

    if (!mserver) {
        mserver = "matrix."+req.headers.host.split(":")[0];
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Content-Type', 'application/json');
    if (syncserver != null) {
        res.end(JSON.stringify({"m.server" : mserver+":"+port,
                                "m.homeserver" : mserver+":"+port,   
                                "org.matrix.msc3575.proxy": {
                                     "url": syncserver+":"+syncport }}, null, 3));
    } else {
        res.end(JSON.stringify({"m.server" : mserver+":"+port, 
                                "m.homeserver" : mserver+":"+port,}, null, 3));
    }
});
app.listen(3000);
