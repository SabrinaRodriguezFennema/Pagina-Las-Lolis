document.getElementById("miFormulario").addEventListener("submit", evento => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const errorNombre = document.getElementById("errorNombre");
    const errorNombreCaracteres = document.getElementById("errorNombreCaracteres");
    const errorEmail = document.getElementById("errorEmail");
    const errorEmailCaracteres = document.getElementById("errorEmailCaracteres");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorTelefonoCaracteres = document.getElementById("errorTelefonoCaracteres");
    const errorMensaje = document.getElementById("errorMensaje");
    

    let formularioValido = true;

    const nombreRegex = /^[a-zA-Z]+$/;
    if (nombre === ""){
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    }else{
        errorNombre.classList.add("d-none");
        if (!nombreRegex.test(nombre)){
            errorNombreCaracteres.classList.remove("d-none");
            formularioValido = false;
        }else{
            errorNombreCaracteres.classList.add("d-none");
        }
    
    }
    
    
    const telefonoRegex = /^[0-9]+$/;
    if (telefono === ""){
        errorTelefono.classList.remove("d-none");
        formularioValido = false;
    }else{
        errorTelefono.classList.add("d-none");
        if (!telefonoRegex.test(telefono)){
            errorTelefonoCaracteres.classList.remove("d-none");
            formularioValido = false;
        }else{
            errorTelefonoCaracteres.classList.add("d-none");
        }
    }
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email == ""){
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    }else{
        errorEmail.classList.add("d-none");
        if (!emailRegex.test(email)){
            errorEmailCaracteres.classList.remove("d-none");
            formularioValido = false;
        }else{
            errorEmailCaracteres.classList.add("d-none");
        }
    }

    if(mensaje.length < 10){
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    }else{
        errorMensaje.classList.add("d-none");
    }
    
    if(formularioValido){
        alert ("Formulario enviado correctamente.");
        document.getElementById("miFormulario").reset();
    }
});