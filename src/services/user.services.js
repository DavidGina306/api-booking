var User = require('../models/user')

exports.getUsers = async function(query, page, limit) {

    try {
        var users = await User.findAll(query)
        return users;
    } catch (e) {
        console.log(e);
        throw Error('Error while Paginating Users')
    }
}