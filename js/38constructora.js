
const user1 = {
    nombre :'Pepe', 
    edad : 33,
    saludar : function(aQuien = 'amigo'){  //funcion para que user1 salude
        console.log(`hola ${aQuien}, soy ${this.nombre}`)
    }
    
}

function User(nombre, edad) {   //si el nombre de la funcion va en mayuscula (User) indica que es CONSTRUCTORA desde dentro se llama this
    //la funcion constructora tiene que ser en mayuscula y en singular
    this.nombre = nombre
    this.edad = edad
   
}

User.prototype.saludar = function(aQuien = 'amigo'){  
    console.log(`hola ${aQuien}, soy ${this.nombre}`)
}

function Mascota(nombre, especie, raza = ''){

    this.nombre = nombre
    this.especie = especie
    this.raza = raza

}

   

let user2 = new User('elena', 23)
let user3 = new User ( 'Hugo', 40)
let Mascota1 = new Mascota ('Cesar', 'Perro')


console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)

user1.saludar('David')
user2.saludar('Sandra')
user3.saludar(user2.nombre)
mascota1.saludar(user1.nombre)

/* function saludar(user2){   /////////////FUNCION SUELTA////////////
    console.log(`hola, soy ${user}`)
}
saludar('Pepe') */

