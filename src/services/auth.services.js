const models = require('../models/index');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/index')

exports.signIn = function(req, res) {
    console.log("Sign-In");

    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send('User Not Found.');
        }

        var passwordIsValid = bcrypt.compare(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, accessToken: token });

    }).catch(err => {
        res.status(500).send('Error -> ' + err);
    });
}

exports.loginRequired = function(req, res) {

}