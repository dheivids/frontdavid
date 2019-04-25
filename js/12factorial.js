//bucle for recorre 
/* for (let i= 0; i < 5; i++) {
    console.log(i+1)
   
} */

/**
 * Programa de calculo del factorial de un numero
 * 
 */

 /**
  * Function factorial
  * (parametros)@param num : number(entrada)
  * @returns : num (salida / devuelve)
  * 
  * se calcula el producto de num por todos los inferiores a el hasta el 1
  * es decir el producto de 1 por todos los superiores a el hasta llegar a num
  * 
  */

    function factorial(num) {
        if (num <=o) {
            return 0 //entraria el  0 y los negativos
        }
        let r = 1
        for (let i = 1; i <= num; i++) {
            r = r  *  i
           

        }
        return r
    }

/**usar if / else y un solo return */
 function factorial2(num) {
     let r= 1
    if (num <= 0) {
        r = 0

    }else{
        for (let i = 1; i <= num; i++){
            r = r * i
        }
    }
    return r
 }


    let number = 0
        number = 5
        number = -4

        number = 0
        number = -4
        number = 5
    console.log(factorial2(number))

 
 