const boton = document.querySelector(".abutton");
obtenerLocalStorage();

function obtenerLocalStorage(){
    let nombreUS =localStorage.getItem("apellido");
    if(nombreUS==null){
        boton.innerHTML=`<button class="button">Iniciar Sesion</button> `;
    }else{
        boton.innerHTML=`<button class="button">`+nombreUS+`</button> `;
    }
}

const sInscrita = document.querySelector(".sesionInscrita");
const boxSesion1 = document.querySelector(".inscripcion1");
const boxSesion2 = document.querySelector(".inscripcion2");
const boxSesion3 = document.querySelector(".inscripcion3");
const boxSesion4 = document.querySelector(".inscripcion4");
boxSesion1.addEventListener("click", inscribirse1);
boxSesion2.addEventListener("click", inscribirse2);
boxSesion3.addEventListener("click", inscribirse3);
boxSesion4.addEventListener("click", inscribirse4);

function inscribirse(nSesion){
        var nombreUS =localStorage.getItem("apellido");
        if(nombreUS!=null){
            localStorage.setItem("sesion","Sesion "+nSesion);
            sInscrita.innerHTML=`<strong>Inscrito en sesion `+nSesion+`</strong>`;
        }else{
            sInscrita.innerHTML=`<strong>Inicia sesion para inscribirte</strong>`;
        }  
}

function inscribirse1(){
    inscribirse(1);
}

function inscribirse2(){
    inscribirse(2);
}

function inscribirse3(){
    inscribirse(3);
}

function inscribirse4(){
    inscribirse(4);
}

const carrito = document.querySelector(".carrito");
const arma1 = document.querySelector(".arma1");
const arma2 = document.querySelector(".arma2");
const arma3 = document.querySelector(".arma3");
const arma4 = document.querySelector(".arma4");
arma1.addEventListener("click", selec);
arma2.addEventListener("click", selec);
arma3.addEventListener("click", selec);
arma4.addEventListener("click", selec);
function selec(){
    var nombreUS =localStorage.getItem("apellido");
    if(nombreUS!=null){
        carrito.innerHTML=`¿Estas seguro que quieres comprar este producto? 
        <button class="si">Si</button>
        <button class="no">No</button>`;
        const botonSI = document.querySelector(".si");
        const botonNO = document.querySelector(".no");
        botonSI.addEventListener("click", comprar);
        botonNO.addEventListener("click", cancelar);
    }else{
        carrito.innerHTML=`Necesita iniciar sesión para <br>realizar pedidos`;
    }
}
function comprar(){
    carrito.innerHTML=`Compra realizada exitosamente`;
}
function cancelar(){
    carrito.innerHTML=`Compra cancelada`;
}