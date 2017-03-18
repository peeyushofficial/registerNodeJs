var Sequelize = require('sequelize'),
    sequelize = new Sequelize('mysql://raj:raj@localhost:3306/investwell')

module.exports = sequelize
