'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
      Profile.hasMany(models.User, {foreignKey: 'profile_id',})
  };
  return Profile;
};
