// ACA EL JUEGO SELECCIONA UN NUMERO AL AZAR PARA QUE ADIVINES
let numeroAzar = Math.floor(Math.random()*100) + 1 

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//ESTA ACCION SE VA A EJECUTAR CUANDO SE TOQUE EL BOTON CHEQUEAR
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Claramente,especifique que elijas un número del 1 al 100'
        mensaje.style.color = 'red';
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'MUY BIEN!, HAS ADIVINADO EL NÚMERO!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Casiii,el numero que buscas es mas alto!';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = 'Casiii,el numero que buscas es mas bajo!';
        mensaje.style.color = 'red';
        }

        
    
    
}