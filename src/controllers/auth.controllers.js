'use strict';

var AuthService = require('../services/auth.services')

exports.signIn = function(req, res) {
    try {
        var res = AuthService.signIn(req, res)
        return res
    } catch (e) {
        console.log(e.message)
        return res
    }
}

exports.loginRequired = function(req, res) {}