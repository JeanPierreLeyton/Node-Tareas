require('colors');

const mostrarMenu = () => {

    console.clear();
    console.log('=========================='.green);
    console.log(' Seleccione la opción '.green);
    console.log('==========================\n'.green);

    console.log(`1. Crear Tarea`);
    console.log(`2. Listar Tarea`);
    console.log(`3. Listar Tareas completadas`);
    console.log(`4. Listar Tareas pendientes`);
    console.log(`5. Completar tareas`);
    console.log(`6. Borrar tarea`);
    console.log(`0. Salir`);
}

module.exports = {
    mostrarMenu
}