class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
        this.alma = true
    }
    saludar (aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    }
}

person1 = new Persona ('Sara', 25)

person1.altura = 176

console.log(person1)
person1.saludar()


class Alumno extends Persona {

    constructor(nombre, edad, curso){
        super(nombre, edad)
        this.curso = curso

    }
    saludar(aQuien = 'amigo'){

        super.saludar(aQuien)
        console.log(`Estoy estudiando ${this.curso}`)
    }
   
}

alumno1 = new Alumno('David', 44, 'HTML5')
console.log(alumno1)
alumno1.saludar()