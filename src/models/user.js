'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_id: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });
    User.beforeCreate((user, options) => { return bcrypt.hash(user.password, 10).then(hash => { user.password = hash; }).catch(err => { throw new Error(); }); });
    User.beforeUpdate((user, options) => { return bcrypt.hash(user.password, 10).then(hash => { user.password = hash; }).catch(err => { throw new Error(); }); });
    User.associate = function(models) {
        User.belongsTo(models.Profile, { foreignKey: 'id', as: 'profiles' })
    };
    return User;
};