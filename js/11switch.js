// switch es un IF  sobre valores discretos(numero limitado de valores) de una sola variable
//uf (x > 5)
// if (x == 2 && y ==3)

let cargo //gerente , senior, junior, becario

cargo = 'Gerente'
cargo = 'Senior'
cargo ='Junior'

let bonus;

switch (cargo.toLowerCase()) {
    case 'gerente':
        bonus = 10000
        break;

    case 'senior':
        bonus = 1000
        break;
    default:
        bonus = 0
        break;
}
console.log(`como eres ${cargo},tu bonus es ${bonus}€`)
/////////////////////////////////////////////////////////////////////////////////

//En Java, c#... etc---
//string name = 'pepe'
//strng nameMay = UpperCase(name)   (CONVIERTE EN MAYUSCULAS)


let array = []
array.push()


let name = 'Pepe'
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()

console.log(name, nameMin, nameMay)
//////////////////////////////////////////////////////////////////