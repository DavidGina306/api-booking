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

exports.storeUsers = async function(body) {
    try {
        const user = models.User.create({
            email: body.email,
            password: body.password,
            name: body.name,
            username: body.username,
            profile_id: body.profile_id
        })
        return user;
    } catch (e) {
        console.log(e);
        throw Error('Error while Paginating Users')
    }
}

exports.updateUsers = async function(req) {
    try {
        const { userId } = req.params;
        const [updated] = await models.User.update(req.body, {
            individualHooks: true,
            where: { id: userId }
        });
        if (updated) {
            const user = await models.User.findOne({ where: { id: userId } })
            return user;
        }
        throw new Error('User not found')
    } catch (e) {
        console.log(e);
        throw new Error('User not found')
    }
}

exports.deleteUsers = async function(req) {
    try {
        const { userId } = req.params;
        const deleted = await models.User.destroy({
            where: { id: userId }
        });
        return deleted
    } catch (error) {
        throw new Error('User not found')
    }
}