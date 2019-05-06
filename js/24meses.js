/**
 * creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equivalentes en otro idioma(ingles como valor)
 * y añadimos una funcion que muestre por  consola la frase
 * "el mes... en ingles se dice..." para cada uno de los meses
 */

let mesesEnIngles = {

    enero : 'january',
    febrero : 'febraury',
    marzo : 'march',
    abril : 'april',
    mayo :'may' ,
    junio :'june',
    julio : 'july',
    agosto : 'august',
    septiempbre :'september',
    octubrer :'october',
    noviembre :'november',
    diciembre :'december',
    toString: function() {
        let output = ''
        for (const key in this) {
            const element = this [key] 
            if (typeof element === 'function') {
                continue
            }
            output = output + `El mes ${key} en ingles se dice ${element}` + '\n'
        }
            return output
    },
        mostrar : function() {
            console.log(this.toString())
        }
}

mesesEnIngles.mostrar()