/**
 * Dada una cadena de carcteres hay que indicar si está formada
 * solo por letras mayúsculas
 * solo por letras minúsculas
 * por la combinacion de ambas
 */

 /**
  * funcion porbarCadena
  * @param cadena : string
  * @return : number
  * -0 = solo por letras mayúsculas
  * -1 = solo por letras minúsculas
  * -2 = por la combinacion de ambas
  */

  function porbarCadena(cadena = '') { 
      //cadena es el parametro al poner las '' lo convierte a string su valor anterior era undefined
            let r = 2 //valor de la variable 
            if(cadena === cadena.toUpperCase()){  //comapara
             r = 0 //valor de la variable
            } else if (cadena === cadena.toLowerCase()) {
                r = 1 //valor de la variable
            }
            return r
  }

  /**
   * funcion comoEsLaCadena
   * @param cadena : string
   * @returns : void
   */

   function comoEsLaCadena(cadena = '') {
    let mensajes = [
        'La cadena esta formada solo por letras mayúsculas',
        'La cadena esta formada solo por letras minusculas',
        'La cadena esta formada por la combinacion de ambas'
    ]
    //otra opcion 
    /* let i = porbarCadena(cadena)
    console.log(mensajes[i]) */

    console.log(mensajes[porbarCadena(cadena)])

   }

   let texto
   texto = 'LO QUE QUIERAS ESCRIBIR'
   comoEsLaCadena(texto)
   texto = 'hola que tal estas'
   comoEsLaCadena(texto)
   texto = 'Una ultima PRueba'
   comoEsLaCadena(texto)