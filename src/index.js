const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Hello World!')
})

const users = []

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: users
    })
})

app.post('/users', function (req, res) {
    // retrieve user posted data from the body
    const user = req.body
    console.log('user', user);
    users.push({
        name: user.name,
        age: user.age
    })
    res.json({
        success: true,
        message: "successfully registered",
        users: users
    })
})

app.listen(3000, function () {
    console.log("server is running")
})