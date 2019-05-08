//calcular cuadrado de un array 

let numbers = [23, 45, 55, 78, 94, 22] 

let cuadrados = numbers.map(item => item * item )

let sumaTotal = 0 

for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
   // sumaTotal = sumaTotal + item  (otra opcion)
   sumaTotal += item  //opcion valida
    
}

let sumaCuadrados = 0

 cuadrados.forEach(item => sumaCuadrados += item) //forEach recorre el array y en cada vuelta hace lo que pidas

    let numbersPares = numbers.filter(item => !(item%2)) // !item%2 comprueba los pares
    let numbersImpares = numbers.filter(item => item%2) //impares al no llevar !

    let limit = 25
    let numbersGrandes = numbers.filter(item => item >=50) //calcula mayor que 50

    let productoAcumulado = numbers.reduce((a,b) => limit) 
    let sumaAcumulada = numbers.reduce((a,b) => a+b)

        
  
    
console.log(cuadrados)
console.log(sumaTotal)
console.log(numbersPares)
console.log(numbersImpares)
console.log(numbersGrandes)
console.log(productoAcumulado)
console.log(sumaAcumulada)
