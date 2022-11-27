/*Constantes para escribir los errores mas comodamente*/
const errorN = document.querySelector(".errorN");
const errorA = document.querySelector(".errorA");
const errorT = document.querySelector(".errorT");
const errorC = document.querySelector(".errorC");
/*Compruebo si ha iniciado sesión o no*/
comprobarInicioSesion();
function comprobarInicioSesion(){
    let nombre =localStorage.getItem("nombre");
    let nombreUS =localStorage.getItem("apellido");
    let telefono =localStorage.getItem("telefono");
    if(nombre!=null && nombreUS!=null && telefono!=null){
        location.href ='../html/listaDatos.html';
    }
}
/*EventListener para saber cuando tengo que comprobar la información
que el usuario a introducido.*/ 
const boxElem = document.querySelector(".envio");
const boxNombre = document.querySelector(".nombreF");
const boxNombreUS = document.querySelector(".nombreUS");
const boxTelefono = document.querySelector(".telefonoF");
const boxEmail = document.querySelector(".emailF");
boxElem.addEventListener("click", validar);
boxNombre.addEventListener("mouseleave",validarNombreForm);
boxNombreUS.addEventListener("mouseleave",validarApellidoForm);
boxTelefono.addEventListener("mouseleave",validarTelefonoForm);
boxEmail.addEventListener("mouseleave",validarEmailForm);

function validar(){
    var correcto;
    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellidos").value;
    var telefono= document.getElementById("telefono").value;
    var correo= document.getElementById("email").value;
    if(validarNombreForm() & validarApellidoForm() & validarTelefonoForm() & validarEmailForm()){
        correcto=true;
    }else{
        correcto=false;
    }
    if(correcto){
        localStorage.setItem("nombre",nombre);
        localStorage.setItem("apellido",apellido);
        localStorage.setItem("telefono",telefono);
        localStorage.setItem("correo",correo);
        localStorage.setItem("sesion",null);
        location.href ='../index.html';
    }
}
function validarNombreForm(){
    var nCorrecto;
    var nombre= document.getElementById("nombre").value;
    nombre=nombre.trim();
    if(nombre==""){
        errorN.innerHTML=`<strong><p>Nombre no introducido</p></strong><br/>`;
        nCorrecto=false;
    }else{
        errorN.innerHTML=`<strong><strong>`;
        nCorrecto=true;
    }
    return nCorrecto;
}
function validarApellidoForm(){
    var aCorrecto;
    var apellido= document.getElementById("apellidos").value;
    apellido=apellido.trim();
    if(apellido==""){
        errorA.innerHTML=`<strong><p>Nombre usuario no introducido</p></strong><br/>`
        aCorrecto=false;
    }else{
        if(apellido.length>14){
            errorA.innerHTML=`<strong><p>Nombre usuario demasiado largo<br> maximo 14 caracteres</p></strong><br/>`
            aCorrecto=false;
        }else{
            errorA.innerHTML=`<strong></strong>`
            aCorrecto=true;
        }
    }
    return aCorrecto;
}
function validarTelefonoForm(){
    var tCorrecto;
    var telefono= document.getElementById("telefono").value;
    telefono=telefono.trim();
    telefono.replace(" ","");
    if(telefono==""){
        errorT.innerHTML=`<strong><p>Telefono no introducido</p></strong><br/>`
        tCorrecto=false;
    }else{
        if(!validarTelefono(telefono)){
            errorT.innerHTML=`<strong><p>Telefono no valido</p></strong><br/>`
            tCorrecto=false;
        }else{
            errorT.innerHTML=`<strong></strong>`
            tCorrecto=true;
        }
    }
    return tCorrecto;
}
function validarTelefono(telefono) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
    return re.test(telefono);
}
function validarEmailForm(){
    var eCorrecto;
    var email= document.getElementById("email").value;
    email=email.trim();
    if(email==""){
        errorC.innerHTML=`<strong><p>Correo no introducido</p></strong><br/>`
        eCorrecto=false;
    }else{
        if(!validarEmail(email)){
            errorC.innerHTML=`<strong><p>Correo no valido</p></strong><br/>`
            eCorrecto=false;
        }else{
            errorC.innerHTML=`<strong></strong>`
            eCorrecto=true;
        }
    }
    return eCorrecto;
}
function validarEmail(email) {
    var re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

