// Asignacion

/* let x = 23
// x = x + 1 
x++
//x = x -1
x--

//Aritmeticos
 /* let y = 2  
/* /*   */
  /*   let r
 r = x + y //25
 r = x - y //21
 r = x * y //46
 r = x / y //11.5
 r = parseInt(x / y)  *///11 PARSEINT SE QUEDA CON EL ENTERO
 
/*  r = Math.round()   FUNCIONES DE REDONDEO
 r = Math.ceil()
 r = Math.floor() */
 /* r = x % y
 console.log('resultado',r) */
 
/* let y = 2
y + = 3
//y = y + 3
y - = 3
//y = y - 3
y *= 2
y /= 3
//y = y % 2
y %= 2
 */
 //OPERADOR TERNADI
    let edad = 8
    let i 
    if (edad >= 18) {
        i = 0

    } else {
        i = 1

    }
    i = (edad >= 18) ? 0 : 1
    console.log('indice',i)

    //OBJETOS en notacion JSON
     let user = {
        nombre: 'Pepe' ,/* nombre =propiedad  valor=pepe */
        edad : 23
    }

    console.log(user.nombre)

    //ARRAYS es una lista de elementos ordenados
    let numeros = [12, 45, 67]
    usuarios = ['Pepe', 'Juan', 'David', 'Maria']
    console.log(usuarios[0])
    usuarios[ usuarios.length]  = 'Ramon'
    usuarios[ usuarios.length]  = 'Carolina'
    usuarios[100] = 'Silvia'
    console.log(usuarios.length) /* lenght cuenta  */

    //MENSAJES AL USUARIO
    let mensaje = [
        'Bienvenido a mi casa' ,
        'No se admiten'
    ]
    console.log(mensaje[i])

