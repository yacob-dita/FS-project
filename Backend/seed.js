const path = require('path');
const fs = require('fs').promises;

const {sequelize} = require('./db');
const {Book} = require('./model/Book');


const seed = async () => {

    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'books.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const {data} = JSON.parse(String(buffer)); //parses data
console.log(data);
    const dataPromises = data.map(book => Book.create(book))
    await Promise.all(dataPromises)
    console.log("db populated!")
}

seed();
// module.exports = seed