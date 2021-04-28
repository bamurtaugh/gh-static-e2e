const express = require('express');
const products = require("./products.json");

const app = express();

app.use('/GetProducts', function(req, res, next) {
  res.send(products);
  // test
})

app.listen(3005, function() {
  
  // listening on a port
  console.log("server is listening");

  console.log('server listening on http://localhost:3005');
});

