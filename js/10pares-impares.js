
// Tipos de Strings
/* 
   let cadena = 'hola mundo'
    cadena = 'hola mundo'
   //ES6 aparecen los template string (reconoce formatos)
   cadena = `hola mundo`

   let user = 'pepe'
   cadena = 'hola ' + user + ', que tal'
   cadena = `hola ${user}, que tal estas`

   console.log(cadena) */
/**
 * Programa que calcuna numeros pares o impares
 * y muestra el resultado en consola
 * 
 */

 /**
  * Function calculaQuees
  * parametros: un valor de tipo num
  *     @param num : number
  *     @returns : number
  * Posibles valores
  *       0 pares
  *       1 impares
  *       2 numeros decimales
  *       3 no numeros (NaN)
  */


  function calculaQueEs(num) {
                   /*  las || significa o */
    let r 
     if (isNaN(num) || Array.isArray(num)||typeof num === 'boolean'){
         // num ===(es identico) || num === false
         //no es un numero
          r = 3
     } else if (parseInt(num) != num) {
                //es un numero decimal
                r =2
     } else {
         r = num % 2
     }

      return  r
  }
     

  /**
   * function isPar
   *    @param num : number
  *     @returns : boolean
  * Posibles valores:
  *     true
  *     false
   */
 
function isPar(num) {

    if (isNaN(num) || Array.isArray(num)||typeof num === 'boolean') {
        throw  3 //'el valor no es un numero'
    } else if (parseInt(num) != num) {
        throw 2 //'el valor es un numero decimal'
    }
    return !(num % 2)

}

function isImpar(num) {
    return !!(num % 2)
}

/**
 * Function mostrar
 * @param isPar: boolean // sera true si el numero es Par
 * @param num: number
 * @returns: void
 */

   /* function mostrar(isPar, num) {
      let mensajes= [ 
          `El numero ${num} es par` , 
           `El numero ${num} es impar`
    ]
        if (isPar) {

            console.log(mensajes[1])

        } else {
            console.log(mensaje[0])
        }
   }
   
   let number = 23
     number = 28
     number =1567
     number =444
   mostrar(isPar(number), number)

 */

 function mostrar (isPar, num) {
     let mensajes = [
         `El numero ${num} es par`,
         `El numero ${num} es impar`,
         `el numero ${num} es decimal, que no es par ni impar`,
         `el numero ${num} no es un numero`
     ]
       /*  let i =1
        if (isPar) {
            i = o
        } */
    let i
    try {
         i = (isPar(num)) ? 0 : 1
    } catch (error) {
        console.log(error)
        return
    }
     
     console.log(mensajes[i])
 
 } 

/**
 * function mostrar2
 * @param code : number //sera 0  sies  par y 1 si es impar
 * @param num : number
 * @returns : void
 */
let number = 0
/*  let number = 23
 number = 28
 number ='pepe'
 number =34.6 */
 mostrar(number)

 ////////////////////////////////////////
 //////////VERSION FINAL

  function mostrar2 (code, num) {
      let mensajes = [
            `el numero ${num} es par`,
            `el numero ${num} es impar`,
            `el numero ${num} es decimal, que no es par ni impar`,
            `el numero ${num} no es un numero`
      ]


      console.log(mensajes[code])
  }
    let numero = 23
        numero = 27
        numero = 'pepe'
        numero = 3.3
        numero = 0
        numero = []
        numero = {}
        numero = true


      /*  mostrar2(calculaQueEs(numero), numero)  */
    // mostrar2(numero % 2, numero)

            //control de errores o excepciones
    /*     try {
            noExiste()

        } catch (error) {
            console.log('lo siento hay un error')
        }
                //GENERA UN ERROR

        try {
            let x = 3
            throw "probando un error"
        } catch (error) {
            console.log('lo siento hay un error:', error)
        } */