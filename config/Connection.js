const { Sequelize } = require('sequelize')
require('dotenv').config()

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: process.env.HOST || 'localhost',
//     port:  process.env.PORT || '5432',
//     username:  process.env.USERNAME || 'postgres',
//     password: process.env.PASSWORD || '',
//     database: process.env.DATABASE || 'backend'
// })

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port:  '5432',
//     username: 'postgres',
//     password: '1234',
//     database: 'fs29'
// })

const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cs6pffo8fa8c73907tlg-a',
    port:  '5432',
    username: 'fs29_gurgel_user',
    password: 'o3huZ9ATkwZNodKGKF2iAXWjbFXRQi0i',
    database: 'fs29_gurgel'
})

module.exports = Connection;