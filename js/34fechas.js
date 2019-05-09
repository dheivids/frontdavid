frontdavid/js/34fechas.js
@dheivids dheivids fechas
3d0670d 22 hours ago
50 lines (34 sloc)  1.15 KB
    
(function() {  ////FUNCION AUTOINVOCADA///////////////////

    let hoy = new Date()
    console.log(hoy)





let fecha = new Date (3461689797)
console.log(fecha)
console.log(fecha.getUTCFullYear())


let nacim = new Date(1975,2,8, 14)
console.log(nacim.toLocaleString())
console.log(nacim.toLocaleTimeString())
console.log(nacim.toLocaleString())
console.log(nacim.toDateString())
console.log(nacim.getDay())
console.log(fechaEnEspañolToString(nacim))



})()

/**
 * Mostrar fecha como "dia de semana , dia de Mes de Año"
 * 
 */

 /**
  * fechaEnEspañolToString
  * @param fecha :Date
  * @return : string
  */

  function fechaEnEspañolToString(fecha = new Date()) {
       const aDias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ]
       const aMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre']
        
    let fechaToString = ''
    fechaToString +=  aDias[fecha.getDay()] + ','
    fechaToString += fecha.getDate() + 'de'
    fechaToString += aMeses[fecha.getMonth()] + 'de'
    fechaToString += fecha.getFullYear()
    return fechaToString

  }