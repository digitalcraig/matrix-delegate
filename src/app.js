var http = require('http');
const { stringify } = require('querystring');

var app = http.createServer(function(req,res){

    var port = process.env.MATRIX_PORT || 8008;
    var mserver = process.env.MATRIX_SERVER || localhost;
    var homeserverurl = process.env.MATRIX_HOMESERVER_URL || null;
    var syncserver = process.env.SYNC_SERVER || null;
    
        mserver = "matrix."+req.headers.host.split(":")[0];

    if (homeserverurl == null ) {
        homeserver = "http://"+mserver+":"+port;
    }
    else {
        homeserver = homeserverurl;
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Content-Type', 'application/json');
    if (syncserver != null) {
        res.end(JSON.stringify({"m.server" : mserver+":"+port,
                                "m.homeserver" : {
                                   "base_url": homeserver },
                                "org.matrix.msc3575.proxy": {
                                     "url": syncserver }}, null, 3));
    } else {
        res.end(JSON.stringify({"m.server" : mserver+":"+port, 
                                "m.homeserver" : {
                                    "base_url": homeserver }}, null, 3));
    }
});
app.listen(3000);
