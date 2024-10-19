let divId = document.getElementById('div');
let boton = document.getElementById('boton');
boton.addEventListener("click", mostrarData);

function mostrarData(){
    console.log("imprime entro");
    divId.innerHTML ="hola desarrolladores"
}

