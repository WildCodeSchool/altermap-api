
module.exports = (sequelize, DataTypes) => {
  const Construction_site = sequelize.define('Construction_site', {
    name: DataTypes.STRING,
    coords: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
  }, {});
  Construction_site.associate = function (models) {
    // associations can be defined here
  };
  return Construction_site;
};
