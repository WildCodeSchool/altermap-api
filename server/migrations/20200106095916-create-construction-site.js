
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Construction_sites', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    coords: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.STRING,
    },
    buyer: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    num_conv: {
      type: Sequelize.STRING,
    },
    date_sign: {
      type: Sequelize.STRING,
    },
    tonnage: {
      type: Sequelize.STRING,
    },
    type_grave: {
      type: Sequelize.STRING,
    },
    type_usage: {
      type: Sequelize.STRING,
    },
    departement: {
      type: Sequelize.STRING,
    },
    project_manager: {
      type: Sequelize.TEXT,
    },
    commentary: {
      type: Sequelize.TEXT,
    },
    area: {
      type: Sequelize.FLOAT,
    },
    photo: {
      type: Sequelize.STRING,
    },
    tonnage_CUB: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    lots: {
      type: Sequelize.STRING,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Construction_sites'),
};
