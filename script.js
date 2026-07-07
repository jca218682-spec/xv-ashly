// =============================
// XV Años Ashly
// =============================

// Elementos principales
const bienvenida = document.getElementById("welcome");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");

// Fecha del evento
const fechaEvento = new Date("September 12, 2026 20:00:00").getTime();

// Abrir invitación al hacer clic en el recuadro blanco
document.getElementById("abrirInvitacion").addEventListener("click", () => {
    musica.volume = 0.7;   // volumen al 70%
    musica.muted = false;  // asegúrate que no esté silenciado

    musica.play().then(() => {
        console.log("Música reproduciéndose...");
    }).catch(error => {
        console.error("Error al reproducir música:", error);
    });

  document.getElementById("contenido").scrollIntoView({
    behavior: "smooth"
});

// =============================
// Cuenta regresiva
// =============================
function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();
