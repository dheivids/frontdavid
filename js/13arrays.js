/* 
let numeros = [1, 2, 4, 6]
let amigos = ['pepe', 'rosa', 'juan']
let deTodo = [1, 45, 'perro', 'gato', true,  {nombre: 'ramon', edad: 23 }]

console.log(deTodo)

for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];
    console.log(`hola ${element}`)
    
 }  */

/**
 * 
 * Programa que comprueba si un nombre ha sido usado alguna vez por un Rey de España
 * 
 */


/**
 * Funcion isRey
 * @name : string (PARAMETRO)
 * @returns : boolean (DEVUELVE)
 */


 function isREy (name) {

    let reyes = ['Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'Jose',                   'Amadeo', 'Alfonso', 'Juan Carlos']
    for (let i = 0; i < reyes.length; i++) {
        const rey = reyes[i];
        if (rey.toLocaleLowerCase() === name.toLocaleLowerCase()) {
            return true
        }
        
    }
        return false
 }

 /**
  * funcion mostrar
  * @param name: string
  * @returns : void (no devuelve nada)
  */
 
  function mostrar(name) {
      let i = 1
      let mensajes = [
          'El nombre ${name} ha sido usado por un rey de España',
          'ningun rey de España se ha llanado nunca ${name}'
        ]
        if (isREy(name)){
            i =0
        }
        console.log(mensajes[i])
  }
  let name ='Carlos'
  name ='Pablo'
  mostrar(name)