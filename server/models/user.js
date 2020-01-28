module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    lastname: DataTypes.STRING,
    company: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.INTEGER,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
