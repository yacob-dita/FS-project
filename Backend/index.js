const{sequelize,DataType,Model}= require('./db');
const Book = require('./model/Book');

module.exports = {Book, sequelize};