module.exports = (sequelize, DataTypes) => {
  const ConstructionSite = sequelize.define('ConstructionSite', {
    name: DataTypes.STRING(20),
    coords: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.DECIMAL)),
    status: {
      type: DataTypes.ENUM('PROSPECTION', 'IN_PROGRESS', 'CANCELLED', 'FINISHED'),
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
      type: DataTypes.DATEONLY,
    },
    num_conv: {
      type: DataTypes.STRING,
    },
    type_grave: {
      type: DataTypes.STRING,
      get() {
        switch (this.getDataValue('type_grave')) {
          case 'MACHEFER':
            return 'Machefer';
          case 'OTHER':
            return 'Autre';
          default:
            return null;
          // return newError()`error ${this.status}`;
        }
      },
      set(value) {
        switch (value) {
          case 'Machefer':
            return this.setDataValue('type_grave', 'MACHEFER');
          case 'Autre':
            return this.setDataValue('type_grave', 'OTHER');
          default:
            return null;
          // return new Error()`error ${this.status}`;
        }
      },
    },

    type_usage: {
      type: DataTypes.STRING,
      get() {
        switch (this.getDataValue('type_usage')) {
          case 'V1':
            return 'V1';
          case 'V2':
            return 'V2';
          case 'V1 AND V2':
            return 'V1 et V2';
          case 'OTHER':
            return 'Autre';
          default:
            return null;
          // return newError()`error ${this.status}`;
        }
      },
      set(value) {
        switch (value) {
          case 'V1':
            return this.setDataValue('type_usage', 'V1');
          case 'V2':
            return this.setDataValue('type_usage', 'V2');
          case 'V1 et V2':
            return this.setDataValue('type_usage', 'V1 AND V2');
          case 'Autre':
            return this.setDataValue('type_usage', 'OTHER');
          default:
            return null;
          // return new Error()`error ${this.status}`;
        }
      },
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
