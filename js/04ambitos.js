'use estrict'

//ambitos o scope de las variables


// ambito global

let  var1 = 20;
prueba()

//MUY MALA PRQACTICA
// no se accede nuca a las variables globales desde las funciones

function  prueba () {

    console.log(var1)
}

//lo mismo con BUENAS PRACTICAS

let var2 = 30
pruebaBien(var2)



function pruebaBien (x) {

    console.log(x)
}

//Nuevo en ES6 usar let en lugar de var (let declara variables)

function condicional() {
    let ext =22
    if(true)  {

        let data = 23;
        console.log(ext)
        console.log(data)
    }
    console.log(ext)
   // console.log(data) daria un error
}

condicional()

let x = 12

function otraPrueba () {
    
     let x = 23
     x = 44
     console.log('dentro de la funcion x vale', x)
}
x = 14
otraPrueba()
console.log('fuera de la funcion x vale', x)