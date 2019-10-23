const fs = require('fs');
let listadoPorHacer = [];

/////////////////////// Guarda como .json La Lista De Tareas/////////////////////////
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No Se Pudo Grabar', err);
    });
};
//////////////////////// Carga del .json las Tareas//////////////////////////////////
const cargaData = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

////////////////////Crae Una Nueva Tarea/////////////////////////////////////////////
const crear = (descripcion) => {
    cargaData();
    descripcion = descripcion.toLowerCase();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};
/////////////////////Obtiene Todas Las Tareas//////////////////////////////////////
const getListado = () => {
    cargaData();
    return listadoPorHacer;
};

//////////////////// Actualiza Una Tarea En Especifico///////////////////////////
const actualizar = (descripcion, completado = true) => {
    cargaData();
    descripcion = descripcion.toLowerCase();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    ////////////////forma tradicional funcion flecha////////////////////
    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

//////////////////Borra Una Tarea En Especifico/////////////////////
const borrar = (descripcion) => {
    cargaData();
    descripcion = descripcion.toLowerCase();
    //////////////////////La Forma Como Yo Lo Hice//////////////
    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
    ////////////////////COMO LO HIZO FERNANDO////////////////////
    let nuevoArray = listadoPorHacer.filter(tarea => {
        return tarea.descripcion != descripcion;
    });
    if (nuevoArray.length != listadoPorHacer.length) {
        listadoPorHacer = nuevoArray;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

///////////////////Exportacion De Las Funciones////////////////////////

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}