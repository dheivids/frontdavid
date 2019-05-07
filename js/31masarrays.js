let nombres = ['Pepe', 'Juan', 'Bernardette', 'Penelope', 'Eustaquio']

//slice es una funcion inmutable deja el array intacto 
console.log(nombres.slice(3,4))

//splice es una funcion mutable (modifica el array)

let newNombres = nombres.splice(1,1)
console.clear
console.log(nombres)
console.log(newNombres)

//Colas y pilas---- todas son mutables
            ////PILAS//////
nombres.push(X) //añade un nuevo elemento al final TIENE QUE TENER PARAMETRO
nombres.pop()  // quita por el final
            ////COLAS//////
nombres.shift()   //quita el primero
nombres.unshift(X)  //añadir al principio TIENE QUE TENER PARAMETRO

