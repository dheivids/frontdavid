export function controller(){
    
    console.dir(document.querySelector('section'))
 //Procedimiento habitual

 //1.Referencia a los NODOS del DOM que me interesan

 const aNodosQuestion = document.querySelectorAll('.question')
 const aNodosRespuesta = document.querySelectorAll('.respuesta')


 

 //2.Definir los manejadores de enventos

 aNodosQuestion.forEach((item) =>{item.addEventListener('click',onclick)})

 //3. Implementar los manejadores de eventos

 function onclick(ev){

     console.dir(ev.target)
    aNodosQuestion.forEach(item => item.classList.remove('destacado')) 
     ev.target.classList.add('destacado')
     aNodosRespuesta.forEach(item => item.hidden = true)
     ev.target.nextElementSibling.hidden =false
 }

}