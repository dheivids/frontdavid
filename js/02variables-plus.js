// En ES6 se utilizan let y const para decalrar variables

let nombre  //declarar variable
nombre = 'David'  //inicializar

let edad = 44 //declarar e inicializar

// Tipos de datos 



//undefined
let data
console.log(data)
console.log(typeof data)

// A- datas primitivos son estos:
// strings
data = 'hola amigos'
console.log (data)
console.log(typeof data)

//numbers
data = 35
console.log(data)
console.log(typeof data)

//booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// B datos referenciales
//object
data = { nombre : 'David', edad : 44}

//object tipo array 
data =[23,45.78]
data = ['lunes', 'martes', 23, 78, true, undefined,{}]
console.log(data)
console.log(typeof data)


function mostrar( input) { 

        console.log('el dato recibido es',input)
        console.log('el tipo de dato es', typeof input)
        console.log('---------')
}


console.log(mostrar)
console.log(typeof mostrar)