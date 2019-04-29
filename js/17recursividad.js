/**
 * Calculo del factorial mediante recursividad
 * 
 */
 
 /**
  * Function factorial
  * @param num : number
  *  @returns : number
  * 
  * se calcula el producto de num por todos los inferiores a el hasta el 1
  * es decir el producto de 1 por todos los superiores a el hastqa llegar a num
  * 
  */


    function factorial(num) {

        let r
        if (num < 0 || parseInt(num) !== num) {
            throw  'no se puede calcular el factorial de numeros negativos'

        } else if ( num === 0) {

            return 1

        }else if (num ===1) {

            return num
        } else if (num > 170) {

            throw 'no puedo calcular factoriales de numeros tan grandes'
        }

        return num * factorial(num -1)
        }
       
        let  n = 0
         n = 4.6
         n = -3
         n = 6
         n = 170
         n = 171 
         n = 4.7
         try {
             console.log(factorial(n))
         } catch (error) {
             console.log (error)

         }
        