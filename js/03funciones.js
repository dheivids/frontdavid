// En ES6 se utilizan let y const para decalrar variables

let nombre  //declarar variable
nombre = 'David'  //inicializar

let edad = 44 //declarar e inicializar

// Tipos de datos 

//undefined
let data
console.log(data)
console.log(typeof data)
function suma(x, y) {
    let r = x + y
    return r
}

function mostrar(texto) {
    console.log(texto)
}

let number1 = 23
let number2 = 20
// console.log(r) daria un error
let result = suma(number1, number2)
mostrar( result )


// No se cumple la separación de intereses o conceptos (separation of concerns)

function sumarMal(x, y) {
    let r = x + y
    console.log(r)
}

sumarMal(2,5)
© 2019 GitHub, Inc.