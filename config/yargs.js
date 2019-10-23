const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Titulo De La Tarea Por Hacer'
};
const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Estado De la Tarea Por Hacer'
};
const argv = require('yargs')
    .command('crear', 'Crea Una Nueva Tarea Para Realizar', { descripcion })
    .command('listar', 'Lista Todas Las Tareas')
    .command('actualizar', 'Actualiza El Estado De Una Tarea', { descripcion, completado })
    .command('borrar', 'Borra Una Tarea De La Lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}