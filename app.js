const chalk = require('chalk');
const notes = require('./notes');

console.log(process.argv);
const command = process.argv[2];

if(command === 'add') {
    console.log('Adding note')
} else if (command === 'remove'){
    console.log('Removing note')
}












// nodemon -> Se instala global, nodemon app.js == --watch
// const validator = require('validator');
// console.log(chalk.red(validator.isURL('https://www.googe.es')));

// console.log(process.argv[2]);

//  add = require('./utils')
// console.log(add(1, 2));*/

// const fs = require('fs');

// Crea el archivo si no está creado e introduce ese texto
// fs.writeFileSync('notes.txt', 'Mi nombre es Gianmarco');

// Introduce este texto
// fs.appendFileSync('notes.txt', '\nSegunda linea introducida');