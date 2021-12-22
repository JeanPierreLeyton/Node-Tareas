const inquirer = require('inquirer');
require('colors');

const menuOpt = [
   {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3'] 
   } 
];

const inquirerMenu = async() =>{
    console.clear();
    console.log('=========================='.green);
    console.log(' Seleccione la opción '.green);
    console.log('==========================\n'.green);

    const opt = await inquirer.prompt(menuOpt);
    return opt;
}

module.exports = {
    inquirerMenu
}