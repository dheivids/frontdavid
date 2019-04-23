let data = 11 
console.log(duplicar(data))
console.log(data)

//los datos primitivos pasan a la funcion como valores
function duplicar(x) {

    x = x * 2
    return x
}

let user1 = {nombre: 'David', edad: 44}
matricular(user1, 'html')
console.log(user1)
let user2 ={nombre: 'Rosa'}
matricular(user2)
console.log(user2)

function matricular(obj, curso = 'JavaScript'  ) {
    obj.curso = curso
    
}