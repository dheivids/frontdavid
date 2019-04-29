/**
 * 
 * @param  x : num
 * @param  y : num
 * @returns : num 
 * 
 * funcion declarada
 * existe "hoisting" (alzamiento)
 */


function suma(x = 0, y = 0) {
    return  x + y

}

/**
 * funcion asignada
 * 
 * una funcion es un dato de tipo objeto
 * 
 */

let objeto = {}

let resta = function (x = 0, y = 0) {

    return x - y
}


/**
 * En ES6 aparecen las arrow (=>)function 
 * 
 */
/* 
let producto = function ( x = 1, y = 1) {
    return x * y
}
 */

/*  let producto = (x = 1, y = 1) => {return x * y} */
 let producto = (x = 1, y = 1) => x * y

 let cuadrado = x => x * x //function arrow (se puede quitar parentesis si silo tiene un parametro) x * x es el return




console.log(suma(4, 6))
console.log (resta(6, 3))
console.log (producto(4, 7))
console.log(cuadrado(6))
