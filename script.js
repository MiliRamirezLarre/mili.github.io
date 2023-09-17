


// Declaracion y uso de apis

const BOTTON = document.getElementById("bttn-intentar");
let intentos = 6;
const API= "https://random-word-api.herokuapp.com/word?length=5"

fetch(API)
        .then((response)=> response.json())
        .then((response)=>{
            PALABRA=response[0].toUpperCase()
            console.log(response)
        })
// Función que capta las palabras que ingresan 
function IngresoPalabra() {
    return document.getElementById("input").value.toUpperCase();
}
// Funcion terminar, retorna el mensaje segun perdió o ganó el usurario
function muestraMensaje(mensaje) {
    document.getElementById("mostrarResultado").innerHTML = mensaje
}
// Declaracion de constantes que contienen elementos del HTML

BOTTON.addEventListener('click', () => {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    let VALOR = IngresoPalabra();
    if(VALOR==PALABRA){
        muestraMensaje("<h1> GANASTEE !! </h1>")
    } else{
        for (let i in PALABRA) {
            if ( PALABRA[i] ===  VALOR[i]) {
                let cuadroLetra= armarLetra(VALOR[i], "green");
                ROW.appendChild(cuadroLetra)
            } else if (PALABRA.includes(VALOR[i])) {
                let cuadroLetra= armarLetra(VALOR[i], "yellow");
                ROW.appendChild(cuadroLetra)
            } else {
                let cuadroLetra= armarLetra(VALOR[i], "gray");
                ROW.appendChild(cuadroLetra)
            }
    
        }
        intentos--
    }
   
   GRID.appendChild(ROW)
    if (intentos == 0) {
        muestraMensaje("<h1> Perdiste !! </h1>")
    }
});

function armarLetra(letra,color){
        let span= document.createElement('span')
        span.className='letter'
        span.innerHTML=letra;
        span.style.backgroundColor= color
        return span
}

