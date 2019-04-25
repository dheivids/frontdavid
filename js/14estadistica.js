
//ES6 spread operator (OPERADOR DE SEPARAR Y AGRUPAR )
/* function sumaPlus(x= 0 , y= 0, ...otros ){
    if (otros){
        console.log('sin usar, otros')
    }
   return  Number(x) +Number(y) 

   }

 /**
   * suma 
  /* /*  */
 /*  function suma(x= 0 , y= 0 ){
    return  Number(x) +Number(y) 
} 
 */


/* 
console.log(suma('2',5))

console.log(suma(2))

console.log(sumaPlus(2,5,6,8))
/** */ 
/*  * Programa de calculo de esatadisticos como la media aritmética
 * que es la suma de los elementos / por el numero de elementos
 */




 /**
  * Finction mediaAr
  * @params datos : array
  * @returns : number
  */

    function mediaAr(datos =[]) {
        let r = 0
        let sumatorio = 0

        for (let i = 0; i <datos.length; i++) {
            const element = datos[i];
            sumatorio = sumatorio + element
            /* sumatorio += element */
        }

        r = sumatorio / datos,length //calcula la media
        console.log(sumatorio)
        console.log(datos.length)
        return r 
    }
        let numeros = [3,5,6,7,8,9]
        console.log(mediaAR(numeros))

 

