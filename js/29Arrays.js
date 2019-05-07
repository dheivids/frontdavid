let datos = []
//se ejecuta por debajo let datos = new Array()
datos = [1, 2, 3, 4, 7, 8]
datos.push(45)


function numeroAlAzar100 () {
    return parseInt(Math.random()*100)
}

/**
 * crea un array de numeros aleatorios, como mínimo 1
 * 
 * funcion aleatorios
 * @param : limite : number
 * @returns : array [number]
 */

 function aleatorios(limite = 1) {
     let r =[] //inicializa la variable en un array vacio
        for (let i = 0; i < limite; i++) {
             r[i] = numeroAlAzar100()
            
        }
     return r

 }
 console.log(aleatorios(12))

 



 function prueba() {
     
        let datos = [1, 70, 7, 5, 9]
        let masDatos = [1,4,6]
        let arrayFinal = datos.concat(masDatos) 
       console.log(datos)
       console.log(arrayFinal)
        

      // let temp = datos // es copiar referencias 
        let temp =datos.slice(0) //sirve para clonar un array
        // temp.sort() ordena Alfabeticamente
        temp.sort((a,b) => a-b) //ordena numericamente
        console.clear()
        console.log('Esto es un temp')
        console.log(temp)
        console.log('Esto es datos')
        console.log(datos)

      

 }
 prueba()



