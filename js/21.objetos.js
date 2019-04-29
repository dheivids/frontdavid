/**
 * notacion literal o JSON
 */

// user1 = new Usuario
//user2 = new Usuario

 let user1 = {
     nombre : 'Pepe',
     edad : 24,
     isAlumno : true,
     direccion : {
         calle : 'Pez',     
         num : '3',
         poblacion : 'Madrid'
     },
     saludar: function() {
        console.log(`hola, soy ${this.nombre} tengo ${this.edad} años`)
    },
        altura : 179
 }
     

 let user2 = {
     nombre : 'rosa',
     edad : 27,
     curso : 'front'
 }
 user1.nombre = 'Jose'
 user1.curso = 'back'

 user1.saludar(

 )