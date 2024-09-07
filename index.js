const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("I am server");
    res.status(200).send({"message": "Server received sandya"});
})


app.listen(80);