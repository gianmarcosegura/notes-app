const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');

console.log(chalk.bgBlueBright(validator.isURL('https://www.google.es')));

















/* const add = require('./utils')
console.log(add(1, 2));*/

/* const fs = require('fs');

// Crea el archivo si no está creado e introduce ese texto
fs.writeFileSync('notes.txt', 'Mi nombre es Gianmarco');

// Introduce este texto
fs.appendFileSync('notes.txt', '\nSegunda linea introducida');
 */
