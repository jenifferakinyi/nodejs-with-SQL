const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Database connection successful....');
    })
    .catch(err => {
        console.log('Error' + err);
    });

// Database models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require('./studentModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Re-sync done');
    });

module.exports = db;
