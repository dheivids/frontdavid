export function main(){

     let aQuien = ''
     let msg = [`hola `, `adios `]
    

///seleccionar nodos del DOM
    let inNombre = document.querySelector('#in-nombre')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnDespedirse = document.querySelector('#btn-despedirse')


    function saludar(){
             aQuien = inNombre.value
             console.log(msg[0] + aQuien)
         }


         btnSaludar.addEventListener('click', saludar )
         btnDespedirse.addEventListener('click', despedirse )

     

         function despedirse(){
            aQuien = inNombre.value
            console.log(msg[1] + aQuien)
        }
}




