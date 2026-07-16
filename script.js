// ==========================
// CAMBIAR MENSAJE
// ==========================

const boton = document.getElementById("botonMensaje");

const mensaje = document.getElementById("mensaje");

const mensajes = [

"Bienvenido a la página.",
"Aprendiendo HTML.",
"Ahora estás usando CSS.",
"JavaScript hace la página interactiva.",
"Gracias por visitar este sitio."

];

let indiceMensaje = 0;

boton.addEventListener("click", () => {

    indiceMensaje++;

    if(indiceMensaje >= mensajes.length){

        indiceMensaje = 0;

    }

    mensaje.textContent = mensajes[indiceMensaje];

});


// ==========================
// CARRUSEL
// ==========================

const imagenes = document.querySelectorAll(".carrusel img");

const siguiente = document.getElementById("siguiente");

const anterior = document.getElementById("anterior");

let indice = 0;

function mostrarImagen(){

    imagenes.forEach(img => img.classList.remove("activa"));

    imagenes[indice].classList.add("activa");

}

mostrarImagen();

let autoplayInterval = null;

function iniciarAutoplay(){
    autoplayInterval = setInterval(() => {
        indice++;
        if(indice >= imagenes.length){
            indice = 0;
        }
        mostrarImagen();
    }, 4000);
}

function reiniciarAutoplay(){
    clearInterval(autoplayInterval);
    iniciarAutoplay();
}

siguiente.addEventListener("click", ()=>{
    indice++;

    if(indice >= imagenes.length){

        indice = 0;

    }

    mostrarImagen();
    reiniciarAutoplay();

});

anterior.addEventListener("click", ()=>{
    indice--;

    if(indice < 0){

        indice = imagenes.length - 1;

    }

    mostrarImagen();
    reiniciarAutoplay();

});

const botonFooter = document.getElementById("botonFooter");
const linkAcerca = document.getElementById("linkAcerca");
const linkContacto = document.getElementById("linkContacto");
const emailText = document.getElementById("emailText");
const botonVerMas = document.getElementById("botonVerMas");

if (linkAcerca) {
    linkAcerca.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Esto es solo un mal intento de una pagina web");
    });
}

if (linkContacto) {
    linkContacto.addEventListener("click", (event) => {
        event.preventDefault();
        if (emailText) {
            emailText.style.fontWeight = "700";
        }
    });
}

if (botonVerMas) {
    botonVerMas.addEventListener("click", () => {
        const estaExpandido = botonVerMas.classList.toggle("expandido");
        botonVerMas.textContent = estaExpandido ? "Ver menos" : "Ver más";
    });
}

iniciarAutoplay();