var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
    console.log('its working fine ')

})

app.listen(3000, function () {
  console.log('Server has started successfully')
})