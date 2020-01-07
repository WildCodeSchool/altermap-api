
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
      type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.DECIMAL)),
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Construction_sites'),
};
