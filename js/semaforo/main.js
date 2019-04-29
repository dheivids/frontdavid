

function semaforo(){
    let circulo = document.getElementsByClassName('circulo');
    circulo[0].style.background ='green';
    circulo[1].style.background = 'gray';
    circulo[2].style.background ='gray';

    function changeToYellow(){
        circulo[0].style.background = 'gray';
        circulo [1].style.background = 'Yellow';
        circulo [2].style.background = 'gray';
    }
    function changeToGreen(){
        circulo[1].style.background = 'gray';
        circulo[0].style.background = 'gray';
        circulo[2].style.background = 'red';
    }

    let x = setTimeout (changeToYellow,3000);
    let y = setTimeout(changeToGreen,5000);
    let start = setInterval (semaforo,8000);
}
semaforo();