const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get('/user/logout', (req,res) => {
    res.send(`<h1> User logged out</h1>`);
});

app.get('/user/:name', (req,res) => {
    res.send(`Hello${req.params.name}`);
});

app.get('/user/:name/profile', (req,res) => {
    res.send(`<h1> This is my profie of ${req.params.name}`);
});

app.listen(port, () => {console.log(`http://127.0.0.1:${port}`);});