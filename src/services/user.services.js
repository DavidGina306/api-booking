const User = require('../models/user')

exports.getUsers = async function(query, page, limit) {

    try {
        var users = await User.findAll()
        User.findAll().then((profile) => {
            console.log(JSON.stringify(profile))
        })
        return users;
    } catch (e) {
        console.log(e);
        throw Error('Error while Paginating Users')
    }
}