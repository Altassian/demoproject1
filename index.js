const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi : "there"})
})

const PORT = process.env.PORT || 8001
app.listen(PORT);

console.log('Your app is running at port : 8001')