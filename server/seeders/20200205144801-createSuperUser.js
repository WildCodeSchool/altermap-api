const argon2 = require('argon2');
const randomBytes = require('randombytes');

const hash = async (password) => argon2.hash(password, { salt: randomBytes(32) });

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    email: 'admin@altermap.com',
    role: '3',
    password: await hash(process.env.ADMIN_PASSWORD),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', {
    email: 'admin@altermap.com',
  }, {}),

};
