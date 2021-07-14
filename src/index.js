const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Hello world!')
})

app.listen(3000, function () {
    console.log("server is running")
})