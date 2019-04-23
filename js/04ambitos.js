'use strict'

// Ambitos o scope de las  variables

// Ambito global
let var1 = 20;
prueba()


// MUY MALA PRACTICA
// No se accede nunca a las variables globales desde las funciones
function prueba() {
    console.log(var1)
}


// Lo mismo con BUENAS PRACTICAS
/* let variable global porque esta declarada fuera */
let var2 = 30
pruebaBien(var2)



function pruebaBien (x) {
    console.log(x)
}

// Nuevo en ES6 usar let en lugar de var
/* Un bloque de codigo esta entre llaves {} */ 
/* Variable dentro del bloque de codigo es una variable local */
function condicional() {
    let ext = 22
    if(true) {
        let data = 23
        console.log(ext)
        console.log(data)
        }
    console.log(ext)
    // console.log(data) // daría un error
    }
    
condicional()


let x = 12

function otraPrueba () {
    let x = 23    
    //x = 23
    console.log('Dentro de la función x vale ', x)
}

otraPrueba()
console.log('Fuera de la función x vale ', x)