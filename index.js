const express = require('express');
const app = express();

app.get('/', (req, res) => {
    req.send({ hi : "there"})
})

app.listen(8008);

console.log('Your app is running at http:localhost:8008')