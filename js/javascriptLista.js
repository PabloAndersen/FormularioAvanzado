const nombreTexto = document.querySelector(".nombre");
const nombreUS = document.querySelector(".nombreUS");
const telefonoTexto = document.querySelector(".telefono");
const correoTexto = document.querySelector(".correo");
const sesionTexto = document.querySelector(".sesion");
pintaDatos();
function pintaDatos(){
    var nombre= localStorage.getItem("nombre");
    var apellido= localStorage.getItem("apellido");
    var telefono= localStorage.getItem("telefono");
    var correo= localStorage.getItem("correo");
    var sesion= localStorage.getItem("sesion");
    nombreTexto.innerHTML=`<strong>Nombre:`+nombre+`<strong>`;
    nombreUS.innerHTML=`<strong>Nombre usuario:`+apellido+`<strong>`;
    telefonoTexto.innerHTML=`<strong>Telefono:`+telefono+`<strong>`;
    correoTexto.innerHTML=`<strong>Correo:`+correo+`<strong>`;
    if(sesion=="null"){
        sesionTexto.innerHTML=`<strong>No se ha inscrito en ninguna sesion<strong>`;
    }else{
        sesionTexto.innerHTML=`<strong>Sesion inscrita:`+sesion+`<strong>`;
    }
}

const boxCerrarSesion = document.querySelector(".cerrarSesion");
boxCerrarSesion.addEventListener("click", cerrarSesion);

function cerrarSesion(){
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("telefono");
    localStorage.removeItem("correo");
    localStorage.removeItem("sesion");
}