require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
console.clear();

const main = async() =>{
    console.log('HOLA');
    mostrarMenu();
    pausa();

}

main();