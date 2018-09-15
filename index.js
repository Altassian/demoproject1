const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi : "there"})
})

app.listen(3001);

console.log('Your app is running at port : 3001')