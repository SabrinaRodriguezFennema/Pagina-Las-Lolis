document.addEventListener("DOMContentLoaded", () =>{
    const botonesAgregar = document.querySelectorAll(".botonAgregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (event) =>{
           event.preventDefault(); 

        const nombre = boton.getAttribute("data-nombre");
        const precio = boton.getAttribute("data-precio");

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.push({nombre, precio});
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${nombre} agregado al carrito.`)
        });
    });
});