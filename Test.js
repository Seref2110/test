var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.collectapi.com",
  "port": null,
  "path": "/economy/currencyToAll?int=10&base=USD",
  "headers": {
    "content-type": "application/json",
    "authorization": "apikey 4KdfbtgTKrlOAjuZ6iMUYJ:0sU97fUgBwgnG1LKRB34rb"

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
