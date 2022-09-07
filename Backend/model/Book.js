const {sequelize} = require('../db')

const {DataType,Model,DataTypes} = require('sequelize')
class Book extends Model {}

Book.init({
name:DataTypes.STRING,
author:DataTypes.STRING,
description:DataTypes.STRING,
price:DataTypes.STRING,
available:DataTypes.STRING,
image:DataTypes.STRING,


},{
    sequelize,
    timestamps:false,
})


module.exports = {Book}



