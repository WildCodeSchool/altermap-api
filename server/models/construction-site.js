
module.exports = (sequelize, DataTypes) => {
  const ConstructionSite = sequelize.define('ConstructionSite', {
    name: DataTypes.STRING,
    coords: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
  }, {});
  ConstructionSite.associate = (models) => {
    // associations can be defined here
  };
  return ConstructionSite;
};
