cd /var/www/altermap-back
git pull
npm install --only=production
npm run sequelize db:migrate
npm run sequelize db:seed -- --seed 20200205144801-createSuperUser.js
pm2 start npm -- start
