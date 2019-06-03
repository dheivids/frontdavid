import {controller} from './controller.js'
 

//Preoceso ASINCRONO (cuando se carga el DOM ejecuta) no se ejecuta instantaniamente
//controller es el nombre del manejador de eventos
/* 
la funcion principal podria estar en este fichero
function app() {
    console.log('App ejecutandose')
} */
//Es buena paractica crear un modulo aparte e importar la funcion principal

document.addEventListener('DOMContentLoaded', controller)//evento DOMContendLoaded