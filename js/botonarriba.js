document.addEventListener("DOMContentLoaded", () => {
    const botonSubir = document.getElementById("botonSubir");

    // Mostrar el botón cuando haces scroll más allá de 300px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            botonSubir.classList.remove("d-none");
        } else {
            botonSubir.classList.add("d-none");
        }
    });

    // Agregar funcionalidad para volver al inicio al hacer clic en el botón
    botonSubir.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.getElementById("botonSubir").onclick=(evento => {
    window.scrollTo({top:0});
})