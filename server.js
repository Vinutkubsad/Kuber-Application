const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 5050);

// PathLocationStrategy

app.get('/*', (req, res) =>{
  res.sendFile(path.join(__dirname + '/dist/../src/index.html'));
})

console.log('console listining');
