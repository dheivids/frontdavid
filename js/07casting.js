/* Existen los operadores aritméticos  + - *  /  % (modulo) */

let x = 22
let nombre = 'Pepe'
let z = '2'



let division = x / z 

console.log (division)  /* tipo de variable es number */
console.log (typeof z)  /*  tipo de variable sera string pork z es string  */


/* NaN */

 division = x / nombre
 console.log(division) /* Esto daria resultado NaN */
 console.log(0/0) /*  resultado NaN*/
 console.log (1/0)  /* resultado Infinity */
 
 
  /*  NaN equivale al concepto matematico de indetermenicaion  convierte a numero un nombre */
/* 0 / n = 0
n / 0 = infinito */
/* 0 / 0 = NaN (indeterminado) */



/* Si quiero evitar indeterminaciones debo validar los datos */

function dividir(x,y) {

    if (isNaN(x) || isNaN (y)) {

        console.log('operadores invalidos')
        return
    }
    console.log('la division da', x / y , '€')
}

dividir(x,z)
dividir(x, nombre) 

console.log('la suma da', x + z)

/* daria 222 porque el sigo mas es un operador sobrecargado  y el simbolo mas si es de tipo string lo concatena y lo añade en vez de sumar  222 seria cadena de caracteres porque uno de los valores seria un string y el concatenado tiene preferencia sobre la suma  */


/* Si hay strings tiene preferencia la concatenacion */
console.log(x + z )
/* para evitarlo tenemos que forzar el casting */

console.log(parseFloat(x) + parseFloat(z)) /* funciones de parseado */

console.log(Number(x) + Number (z))  
console.log(+x + +z)

console.log (typeof z)   /* pregunta de que tipo es  */

