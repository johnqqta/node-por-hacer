const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        if (listado.length > 0) {
            console.log("--------------Por Hacer---------------".blue);
            for (let tarea of listado) {
                console.log('Tarea: '.yellow, tarea.descripcion);
                if (tarea.completado) {
                    console.log('Estado: '.yellow, 'Completado'.green);
                } else {
                    console.log('Estado: '.yellow, 'Incompleto'.red);
                }
            }
            console.log("--------------------------------------".blue);
        } else {
            console.log("--------------------------------------".yellow);
            console.log('No Hay Tareas Por Hacer En La DB'.red);
            console.log("--------------------------------------".yellow);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log(`Comando "${comando}" es invalido`);
        break;
}