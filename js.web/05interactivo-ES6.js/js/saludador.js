export class  Saludador {

constructor(){
    this.aQuien = ''
    this.msg = [`hola `, `adios `]
    

///seleccionar nodos del DOM
    this.inNombre = document.querySelector('#in-nombre')
    this.btnSaludar = document.querySelector('#btn-saludar')
    this.btnDespedirse = document.querySelector('#btn-despedirse')
    this.output = document.querySelector("#output")
    this.btnClear = document.querySelector('#btn-clear')

//asignar manejadores a los nodos///
    this.btnSaludar.addEventListener('click', this.saludar.bind(this))
    this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
    this.btnClear.addEventListener('click', this.clear.bind(this))

}
saludar(){
    if(this.inNombre.value){
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
        this.output.innerHTML =this.msg[0] + this.aQuien
}


  /*   }
     this.aQuien = '<b>'+ this.inNombre.value + '</b>' 
     console.log(this.msg[0] + this.aQuien) 
    this.output.innerHTML =this.msg[0] + this.aQuien
} */
despedirse()
    if(this.inNombre.value){
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
        this.output.innerHTML = this.msg[1] + this.aQuien

    }
}

clear(){
    this.output.innerHTML = ''
    this.inNombre.value = ''
} }
