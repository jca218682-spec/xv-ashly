// =============================
// XV Años Ashly
// =============================

const boton = document.getElementById("enter");
const bienvenida = document.getElementById("welcome");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");

// Evento
const fechaEvento = new Date("September 12, 2026 20:00:00").getTime();

// Abrir invitación
boton.addEventListener("click", () => {

    musica.play();

    bienvenida.style.display = "none";

    contenido.style.display = "block";

});

// Cuenta regresiva

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").innerHTML="00";
        document.getElementById("horas").innerHTML="00";
        document.getElementById("minutos").innerHTML="00";
        document.getElementById("segundos").innerHTML="00";

        return;

    }

    const dias = Math.floor(diferencia / (1000*60*60*24));

    const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").innerHTML=dias;
    document.getElementById("horas").innerHTML=horas;
    document.getElementById("minutos").innerHTML=minutos;
    document.getElementById("segundos").innerHTML=segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();
