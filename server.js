const express = require('express');

const PORT = 3001;

const app = express(); // create a express server object

app.get('/home', (req, res) => {
    res.send("hi there, welcome to get");
})

app.post('/home', (req, res) => {
    res.send("hi there, welcome to post");
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})