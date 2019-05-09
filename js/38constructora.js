
const user1 = {
    nombre :'Pepe', 
    edad : 33,
    saludar : function(aQuien = 'amigo'){  //funcion para que user1 salude
        console.log(`hola ${aQuien}, soy ${this.nombre}`)
    }
    
}

function User(nombre, edad) {   //el nombre de la funcion va en mayuscula (User) indica que es CONSTRUCTORA desde dentro se llama this
    //la funcion constructora tiene que ser en mayuscula y en singular
    this.nombre = nombre
    this.edad = edad
    this.mascotas = []
   
}
///////PODEMOS AÑADIR METODOS AL PROTOTYPO DE NUESTRAS FUNCIONES
Object.prototype.saludar = function(aQuien = 'amigo'){  //PROTOTIPO
    console.log(`hola ${aQuien}, soy ${this.nombre}`)
}


User.prototype.adoptarMascota = function(mascota = new mascota()){
    this.mascotas.push(mascota)

}






function Mascota(nombre, especie, raza = ''){

    this.nombre = nombre
    this.especie = especie
    this.raza = raza

}

   

let user2 = new User('elena', 23)
let user3 = new User ( 'Hugo', 40)
let mascota1 = new Mascota ('Tobi', 'Perro')
let mascota2 = new Mascota ('Titus',  'gato', 'persa')

mascota2.edad = 2
delete mascota1.raza
 user2.adoptarMascota(mascota1)

 
console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)
console.log(mascota2)
console.log(user2)

user1.saludar('David')
user2.saludar('Sandra')
user3.saludar(user2.nombre)



user1.saludar(mascota1.raza  +  ''  + mascota1.nombre)
user3.saludar(mascota2.raza  +  ''  + mascota2.nombre)
mascota1.saludar(user3.nombre)

/* function saludar(user2){   /////////////FUNCION SUELTA////////////
    console.log(`hola, soy ${user}`)
}
saludar('Pepe') */

//diferencia entre  PROTOTIPOS  y clases

//Dependencia : método adotarMascota


//Asosiacion : atributo mascota = new Mascota
user3.mascotas[0] = new Mascota ('Piolin', 'canario')
console.log(user3.mascotas[0].nombre)