var express = require('express');
var app = express();
app.use(express.logger());
buf = new Buffer(2000);
app.get('/', function(request, response) {
 buf=fs.readFileSync("index.html");
 response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
