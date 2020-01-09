module.exports = (sequelize, DataTypes) => {
  const ConstructionSite = sequelize.define('ConstructionSite', {
    name: DataTypes.STRING,
    coords: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
    status: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    buyer: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    num_conv: {
      type: DataTypes.STRING,
    },
    date_sign: {
      type: DataTypes.STRING,
    },
    tonnage: {
      type: DataTypes.STRING,
    },
    type_grave: {
      type: DataTypes.STRING,
    },
    type_usage: {
      type: DataTypes.STRING,
    },
    departement: {
      type: DataTypes.STRING,
    },
    project_manager: {
      type: DataTypes.TEXT,
    },
    commentary: {
      type: DataTypes.TEXT,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    photo: {
      type: DataTypes.STRING,
    },
    tonnage_CUB: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    lots: {
      type: DataTypes.STRING,
    },
  }, {});
  ConstructionSite.associate = (models) => {
    // associations can be defined here
  };
  return ConstructionSite;
};
