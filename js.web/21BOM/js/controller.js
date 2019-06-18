export function controller(){

    console.log('controller cargado')

    const btnProbar = document.querySelector('#btnProbar')

    btnProbar.addEventListener('click', onClickProbar)

     function onClickProbar(){

       /*  window.alert('probando')
        window.prompt('probando') 
        window.confirm('probando')*/


        let handler = window.open()
        window.setTimeout(() => {
            handler.close()
        }, 2000)

        console.log(handler)

       let handTime = setTimeout(() =>{},2000)
            clearTimeout(handTime)
        let handInterval = setInterval(() =>{}, 10)  
            clearInterval(handInterval)  

     }
}