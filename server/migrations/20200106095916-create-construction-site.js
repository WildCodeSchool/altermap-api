
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ConstructionSites', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING(20),
    coords: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.DECIMAL)),
    status: {
      type: Sequelize.ENUM('PROSPECTION', 'IN_PROGRESS', 'CANCELLED', 'FINISHED'),
    },
    year: {
      type: Sequelize.DATEONLY,
    },
    num_conv: {
      type: Sequelize.STRING,
    },
    type_grave: {
      type: Sequelize.STRING
    },
    type_usage: {
      type: Sequelize.STRING
    },
    buyer: {
      type: Sequelize.STRING(80),
    },
    contact: {
      type: Sequelize.STRING(80),
    },
    departement: {
      type: Sequelize.STRING(2),
    },
    project_manager: {
      type: Sequelize.TEXT,
    },
    commentary: {
      type: Sequelize.TEXT,
    },
    area: {
      type: Sequelize.FLOAT(4),
    },
    date_sign: {
      type: Sequelize.DATEONLY,
    },
    photo: {
      type: Sequelize.STRING(100),
    },
    lots: {
      type: Sequelize.STRING(200),
    },
    tonnage: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ConstructionSites'),
};
