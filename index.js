var http = require('http');
const bodyParser=require('body-parser'); 

app.use(bodyParser.json()) ;

http.createServer(function (req, res) {
    console.log(req.bodyParser)
    
    res.end();
}).listen(process.env.PORT || 3000);
