'use strict';
module.exports = (sequelize, DataTypes) => {
  const Construction - site = sequelize.define('Construction-site', {
    name: DataTypes.STRING,
    coords: DataTypes.DECIMAL
  }, {});
  Construction - site.associate = function(models) {
    // associations can be defined here
  };
  return Construction - site;
};