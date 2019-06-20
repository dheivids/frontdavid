
 * Funcion isRey
 * @name : string (PARAMETRO)
 * @returns : boolean (DEVUELVE)
 */


function ciudades (name) {

    let ciudades = ['Roma', 'Madrid', 'Paris', 'Sevilla', 'Lisboa', 'Tokio']
    for (let i = 0; i < reyes.length; i++) {
        const ciudad = ciudades[i];
        if (ciudades.toLocaleLowerCase() === name.toLocaleLowerCase()) {
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
          'El nombre ${name} es una ciudad',
          'no es una ciudad${name}'
        ]
        if (isCiudad(name)){
            i =0
        }
        console.log(mensajes[i])
  }
  let name =''
  name =''
  mostrar(name)