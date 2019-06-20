export function controller () {

  let  inNombre = document.querySelector('#in-nombre')
  let  btnOk = document.querySelector('#btn-ok')
  let  outPut = document.querySelector('#output')
    
/**
   * @Funcion isCiudad
 * @name : string (PARAMETRO)
 * @returns : boolean (DEVUELVE)

  */
 
 btnOk.addEventListener('click', onClick)


 function onClick(){
     let nombre = inNombre.value
     outPut.innerHTML =  mostrar(nombre)
 }

function isCiudad (name) {

    let ciudades = ['Roma', 'Madrid', 'Paris', 'Sevilla', 'Lisboa', 'Tokio']
    for (let i = 0; i < ciudades.length; i++) {
        const ciudad = ciudades[i];
        if (ciudad.toLowerCase() === name.toLowerCase()) {
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
          `El nombre ${name} es una ciudad`,
          `no es una ciudad${name}`
        ]
        if (isCiudad(name)){
            i =0
        }
        return mensajes[i]
  }
}