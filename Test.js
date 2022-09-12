var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.collectapi.com",
  "port": null,
  "path": "/economy/currencyToAll?int=10&base=USD",
  "headers": {
    "content-type": "application/json",
    "authorization": "apikey your_token"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
