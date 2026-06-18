const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/blog/:topic', (req, res) => {
  console.log(`The region is ${req.query.reg}`);
  res.send(`This is my topic: ${req.params.topic}`);
});

app.get('/home',(req,res) => {
  res.sendFile("/templates/hello.html",{root: __dirname});
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(port, () => {console.log(`http://127.0.0.1:${port}`);});