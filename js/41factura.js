/**
 * Objeto Facturas
 * 
 * definir la estructura de un objeto que almacena una facruta
 * Las facuras estan formadas por:
 * -la informacion de la porpia empresa(nombre de la empresa,direccion, telefono, NIF)
 * una lista de elementos (cada uno de los cuales dispone de descripcion, precio,cantidad)
 * otra informacion basica de la factura(importe total, tipo de IVA, forma de pago)
 * añadir un metodo que calcule el importe total de la factura y actualice el valor de la propiedad corrspondiente
 * Añadir otro metodo que muestre por pantalla el importe total de la factura
 * (en formato HTML adecuado)
 * 
 */
(function(){




factura = {
        empresa :{nombre : '', direccion : '', tefelono : '', NIF : ''},
        cliente :{nombre :'', direccion : '', tefelono : '', NIF :''},
        items : [
            {description:'', precio: '', cantidad:''},
            {description:'', precio: '', cantidad:''},
            {description:'', precio: '', cantidad:''}
        ],
        importeTotal: 0,
        tipoIva: 23,
        formaPago: 'efectivo',
        calculaImporte: function(){
            let iva =  this.tipoIva <1 ? 1+this.tipoIva: this.tipoIva
            return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva
        },

            actualizaImporte: function() {
                this.importeTotal = this.calculaImporte()
            },

            muestraImporte: function(){
                this.actualizaImporte()
                console.log(this.importeTotal)
            }
}
factura.muestraImporte()




})()