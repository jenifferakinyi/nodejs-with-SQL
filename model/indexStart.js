const dbConfig = require ('../config/dbConfig')

const {Sequelize, DataType, DataTypes} = require('sequelize')

const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliase:false
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('database connection successful....')
})
.catch(err=>{
    console.log('Error' + err)
})
//database models
const db = () ;
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.students = require('./studentModel')( sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('re-sync-done')
})
module.exports = db