let vuelo = {
    //POR DEBAJO HACE  let vuelo = new Object()
    aerolinea :'Oceanic',
    number : '815',
    deperture :{
      claveIATA: 'SYD', 
      time: '2004-09-22 14:55',
      place: {
        cuidad: 'Sideney',
        pais: 'Australia',
      },
      ciudad:'Sidney',
    },

    arrival : {

        claveIATA: 'LAX', 
        time: '2004-09-23 10:42',
        ciudad:'Los Angeles',
    }
}
//let datos ='departure'
let datos ='arrival'

//notacion por puntos
//console.log(vuelo.number)
//console.log(vuelo.datos)

//notacion por corchetes ->permite usar variables para los nombres de propiedades

console.log(vuelo['number'])
console.log(vuelo[datos])


let users = ['pepe', 'Rosa', 'Juan', 'Maria']

console.log(users)

for (let i = 0; i < users.length; i++) {
    const user = users[i]; //const proteje el iterador y el valor user para que no de errores entre una vuelta y otra
    console.log(`hola ${user}`)
    
}


//bucle de objetos por cada vuelta que da guarda en key una clave (1 vuelta aerolinea...2 vuelta number...etc)
/* for (const key in vuelo) {
        const element = vuelo[key];
        if (typeof element != 'object') {

            console.log(`la propiedad ${key} vale ${element}`)
        } else  {
            for (const key in element) {
                const item = element[key];
                console.log(`la propiedad ${key} vale ${item}`)

            }

        }
    } 
   */
    function mostrarOjeto(obj) {
        for (const key in obj) { //recorre el objeto y por cada vuelta coje el valor key
                const element = obj[key]; //elemnet coje el valor key 
                 if (typeof element != 'object') {
                     console.log(`la propiedad ${key} vale ${element}`)
                 }
                 else{
                    console.log(`la propiedad ${key} vale ....`)
                     mostrarOjeto(element)
                 }
            }
        }

mostrarOjeto(vuelo)
    

    