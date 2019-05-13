    
// Ejemplo de 'pseudopropiedad' getter

let persona = {
    nombre: 'Pepe',
    nacim : new Date(1965, 8, 31),
    get edad () { //funcion que parece propiedad 
        return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    },
    amigos: [],
    set nuevoAmigo(amigo) { //metodo de tipo set
      this.amigos.push(amigo);
    }   
}

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad)
console.log(persona.nacim)

/**
 * En Java, c#.....
 * 
 * class Persona {
 * private edad
 * }
 * 
 * p1 = new Persona()
 * pi.edad = 23 //ERROR
 * console.log (pi.edad)//ERROR 
 * 
 */