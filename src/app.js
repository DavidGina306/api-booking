const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const models = require('../src/models/index');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var users = require('./routes/user.routes');
app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Sistema de Reservas')
})

app.get('/user', (req, res, next) => {
    models.User.findAll()
        .then(userResponse => {
            res.status(200).json(userResponse)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

module.exports = app;