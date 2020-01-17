module.exports = (sequelize, DataTypes) => {
  const ConstructionSite = sequelize.define('ConstructionSite', {
    name: DataTypes.STRING(20),
    coords: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
    status: {
      type: DataTypes.STRING,
      get() {
        switch (this.getDataValue('status')) {
          case 'PROSPECTION':
            return 'Prospection';
          case 'IN_PROGRESS':
            return 'En cours';
          case 'CANCELLED':
            return 'Annulé';
          case 'FINISHED':
            return ('Terminé');
          default:
            return null;
          // return newError()`error ${this.status}`;
        }
      },
      set(value) {
        switch (value) {
          case 'Prospection':
            return this.setDataValue('status', 'PROSPECTION');
          case 'En cours':
            return this.setDataValue('status', 'IN_PROGRESS');
          case 'Annulé':
            return this.setDataValue('status', 'CANCELLED');
          case 'Terminé':
            return this.setDataValue('status', 'FINISHED');
          default:
            return null;
          // return new Error()`error ${this.status}`;
        }
      },
    },
    year: {
      type: DataTypes.ENUM('2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'),
    },
    num_conv: {
      type: DataTypes.STRING,
    },
    type_grave: {
      type: DataTypes.ENUM('MACHEFER', 'AUTRE'),
    },
    type_usage: {
      type: DataTypes.ENUM('V1', 'V2', 'V1 ET V2', 'AUTRE'),
    },
    buyer: {
      type: DataTypes.STRING(80),
    },
    contact: {
      type: DataTypes.STRING(80),
    },
    departement: {
      type: DataTypes.STRING(2),
    },
    project_manager: {
      type: DataTypes.TEXT,
    },
    commentary: {
      type: DataTypes.TEXT,
    },
    area: {
      type: DataTypes.FLOAT(4),
    },
    date_sign: {
      type: DataTypes.DATEONLY,
    },
    photo: {
      type: DataTypes.STRING(100),
    },
    lots: {
      type: DataTypes.STRING(200),
    },
    tonnage: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },

  }, {});
  ConstructionSite.associate = (models) => {
    // associations can be defined here
  };
  return ConstructionSite;
};
