/**
 * Objeto Facturas
 * 
 * Definir la estructura de un objeto que almacena una factura. 
 * Las facturas están formadas por 
 * -la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF),
 * -la información del cliente (similar a la de la empresa),
 * -una lista(ARRAY) de elementos (cada uno de los cuales dispone de descripción, precio, cantidad)
 *  y otra información básica de la factura (importe total, tipo de IVA, forma de pago).
 * Añadir un método que calcule el importe total de la factura 
 * y actualice el valor de la propiedad correspondiente.
 * Añadir otro método que muestre por pantalla el importe total de la factura
 * (en un formato HTML adecuado)
 * 
 */
(function(){  

    factura = {    ///OBJETO FACTURA///
       empresa: {
           nombre: 'Ediciones Boracay', 
           dirección: 'c/ Pez', 
           teléfono: '916583764', 
           NIF: 'B-64539874'},
       cliente: {
           nombre: 'Libros Tuatalug', 
           dirección: 'c/ Marques de ', 
           teléfono: '917256983', 
           NIF: 'M-64584741'},
       items: [ //ARRAY DE OBJETOS //
           {descripcion: 'Libro 1', precio: 20, cantidad: 12},
           {descripcion: 'Libro 2', precio: 29, cantidad: 10},
           {descripcion: 'Libro 3', precio: 37.7, cantidad: 7},
       ],
       importeTotal: 0, //VARIABLE CALCULADA//
       tipoIVA: 0.23, 
       formaPago: 'efectivo',
       calculaImporte: function() { ///METODO QUE CALCULA IMPORTE//MAPEA EL ARRAY DE OBJETOS PARA CONVERTIRLO EN NUMEROS
           let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
           return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva
       },         // reduce (solo usa dos parametros de valor: a,b) suma elementos de un array y devuelve un valor//
       actualizaImporte: function () { 
           this.importeTotal = this.calculaImporte()
       },
       muestraImporte: function () { //OTRA FUNCION VALIDA
           this.actualizaImporte()
           let msg = 'El importe total (IVA incluido) es ' + this.importeTotal.toFixed(2) + '€'
           console.log(msg)
       }
   }
   factura.muestraImporte()
   })() 