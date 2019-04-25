/**
 * presentar los numeros primos del 1 al n
 */

 /**
  * function isPrimo
  * @param num : number
  * @returns : boolean
  */

  function isPrimo(num) {
         let r = true
         if( !num){     
             return  false

         }/*  else if (num == 1) {
             return true
         } */

         for (let i = 2; i < num; i++) {
           /*  if(num % i == 0){ */
    
             if (!(num % i)) {
                // no primo
                return false
             }
               
            }
            return r    
         }



        let number = 0
        number = 1
        number = 2
        number = 3
        number = 4
        number = 9
        number = 21
        number = 4
        console.log(isPrimo(number))

/**
 * function listaPrimos
 * @param limite : number
 * @return : array[number] (array porque es lista de numeros)
 */

 function listaPrimos(limite) {
     let primos = []
     for (let i = 0; i <= limite; i++) {
         
        if(isPrimo(i)){
            primos.push(i)
        }
         
     }
     return primos
 }
 console.log('numeros primos', listaPrimos(80).join ('*********'))
