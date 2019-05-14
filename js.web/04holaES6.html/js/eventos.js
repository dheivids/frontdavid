export class Eventos {
    constructor (){
        this.msg = [
            'Hola desde una clase en un fichero ES6',
            'Adios desde una clase en un fichero ES6',
            'El raton entro',
            'El ratón salió'
        ]
        this.manejarDOM()
        this.asignarListener()
}
    manejarDOM() {
        this.nodos = {
            btnSaludar : document.querySelector('#btn-saludar'),
            btnDespedirse : document.querySelector('#btn-despedirse'),
            divRaton : document.querySelector('#div-raton')
        }
    }
    asignarListener(){

    this.nodos.btnSaludar.addEventListener('click', this.saludar.bind(this))
    this.nodos.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
    this.nodos.divRaton.addEventListener('mouseover', this.onMouseOver.bind(this))
    this.nodos.divRaton.addEventListener('mouseout', this.onMouseOut.bind(this))    

}

saludar(){

console.log(this.msg[0])
}

 despedirse () {
    console.log(this.msg[1])
}


 onMouseOver() {
    console.log(this.msg[2])
}

 onMouseOut() {
    console.log(this.msg[3])
} }
