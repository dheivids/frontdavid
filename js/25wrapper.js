
function main() {
    let cadena = 'Hola amigo'
    let alumno = {
        saludar: function(){}
    }
    // let alumno SE EJECUTA POR DETRAS let alumno es = new Object() 
    let users = ['Pepe', 'Elena', 'Maria']
    // let users SE EJECUTA POR DETRAS let users = new array() 
    console.log(typeof users)
   
    //en otros lenguajes toLowerCase(cadena) 
    
    console.log(cadena.toLowerCase())
        //  let cadenaTemp = new String() SE HACE POR DEBAJO
    console.log(cadena.length)
        let aCadena = cadena.split(' ')
        let cadenaSinEspacios = aCadena.join('')

      cadena = cadena.split(' ').join('').toUpperCase()
         console.log(cadena)

         let url = 'https://www.cife.es/alumnos'
       //recorre el https  posicion 2 por delante desde la "doble //", luego sobre urltemp va desde la posicion 0 hasta la / y muestra solo cife.es (va separando componetes)
         let urlTemp = url.slice(url.indexOf('//')+2)
          urlTemp = urlTemp.slice(0, urlTemp.indexOf('/'))
        /*  console.log(urlTemp) */

        console.log(url.split('/')[1])

        console.log(url[12])// cuenta posicion concreta en este caso la 12

}

main()

