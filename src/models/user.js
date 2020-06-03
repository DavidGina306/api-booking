'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_id: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {});
    User.associate = function(models) {
        User.belongsTo(models.Profile, { foreignKey: 'id', as: 'profiles' })
    };
    return User;
};