document.getElementById("formSuscribite").addEventListener("submit", evento => {
    evento.preventDefault();

    const email = document.getElementById("emailSusc").value.trim();
    let formularioValido = true;
    if(email == ""){
        alert ("El email es obligatorio.");
        formularioValido = false;
    }

    if(formularioValido){
        alert ("¡Gracias por suscribirse!");
        document.getElementById("formSuscribite").reset();
    }
});