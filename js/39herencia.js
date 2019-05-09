//Personas
   //Alumnos

  function Persona(nombre, edad) {   //el nombre de la funcion va en mayuscula (User) indica que es CONSTRUCTORA desde dentro se llama this
    //la funcion constructora tiene que ser en mayuscula y en singular
}

Persona.prototype.saludar = function(aQuien = 'amigo'){
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)
}

function Alumno(nombre, edad, curso){
    this.nombre = nombre
    this.edad = edad
    this.curso = curso
}

Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno 

const alumno1 = new Alumno('Maria', 20, 'JavaScript')
const alumno2 = new Alumno('Sandra', 30, 'JavaScript')

console.log(alumno1)
alumno1.nombre = 'Maria'
alumno1.saludar()
alumno2.saludar(alumno1.nombre)



///////////////////////////////////////////////////////////////////////
//HERENCIA  PROTOTIPICA (prototypal inheritance)
//Basado en la idea de que los objetos  heredan de objetos  de Douglas Crockford

console.clear()

const person1 = {
    nombre : 'Maria',
    edad : 23,
    saludar : function(aQuien = 'amigo'){
        console.log(`Hola${aQuien}, soy${this.nombre}`)
    }
}
user1 = Object.create(person1)
user1.claver = '12345'

console.log(user1)
console.log(user1.nombre)
user1.saludar()
