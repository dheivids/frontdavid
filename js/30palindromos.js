/**
 * comporbar si una funcion es un palindromo
 * se lee igual en ambos sentidos sin contar los espacios
 * EJEMPLO:
 * Alli va Ramon y no maravilla.
 * Amad a la dama.
 */

 /**
  * function isPali
  * @param cadena : string
  * @returns : boolean
  */

  function isPali(cadena = '') {
      let r = true
      let cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
      console.log(cadenaSinEspacios)
      let cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
      console.log(cadenaInversa)
      if(cadenaSinEspacios !== cadenaInversa) {
          r = false
      }
      return r
  }

  function isPali2(cadena = '') {
      let r = true
      let cadenaInversa = cadena
  }




(function () {
    let textos = [
        'Esto no es un palindromo',
        'La ruta nos aporto otro paso natural',
        'Atar a la rata'
    ]
    for (let i = 0; i < textos.length; i++) {
        const texto = textos[i];
        console.log(texto)
        console.log(isPaliShort(texto))
    }
}) ()