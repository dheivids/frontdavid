let data = 11 
console.log(duplicar(data))
console.log(data)

//los datos primitivos pasan a la funcion como valores
function duplicar(x) {

    x = x * 2
    return x
}

let user = {nombre: 'David', edad: 44}
matricular(user)
console.log(user)

function matricular(obj) {
    obj.curso = 'JavaScript'
    
}