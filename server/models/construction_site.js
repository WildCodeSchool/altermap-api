
module.exports = (sequelize, DataTypes) => {
  const Construction_site = sequelize.define('Construction_site', {
    name: DataTypes.STRING,
    coords: DataTypes.INTEGER,
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
  Construction_site.associate = function (models) {
    // associations can be defined here
  };
  return Construction_site;
};
