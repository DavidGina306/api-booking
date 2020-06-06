var UserService = require('../services/user.services')

exports.getUsers = async function(req, res, next) {
    // Validate request parameters, queries using express-validator

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.storeUsers = async function(req, res) {
    try {
        var users = await UserService.storeUsers(req.body)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateUsers = async function(req, res) {
    try {
        var users = await UserService.updateUsers(req)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.deleteUsers = async function(req, res) {
    try {
        var users = await UserService.deleteUsers(req)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ status: 400, message: e.message });
    }
}