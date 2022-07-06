alert("LOL")
function validarRut(Rut){
    var suma=0;
    var arrRut = Rut.split("-");
    var rutSolo = arrRut[0];
    var verif = arrRut[1];
    var continuar = true;
    for(i=2;continuar;i++){
        suma += (rutSolo%10)*i;
        rutSolo = parseInt((rutSolo /10));
        i=(i==7)?1:i;
        continuar = (rutSolo == 0)?false:true;
    }
    resto = suma%11; dv = 11-resto;
    if(dv==10){  
    if(verif.toUpperCase() == 'K') return true;
    }else if (dv == 11 && verif == 0)
        return true;
        else if (dv == verif) return true;
        return false;
}

function validar(){
    
    
    var rut = validarRut(document.getElementById("Rut").value);
        if (rut==false){
            alert("Rut incorrecto");
            return;
        }
        var nombre = document.getElementById("nombre").value;
        if(nombre.trim().length == 0){
            alert("Error, el campo nombre es obligatorio.");
            return;
        }
        var apellido = document.getElementById("Apellido").value;
        if(apellido.trim().length == 0){
            alert("Error, el campo apellido es obligatorio.");
            return;
        }
        var telefono = document.getElementById("phone").value;
        if( !(/^\d{9}$/.test(telefono)) ) {
            alert("Error, el numero de telefono debe contener 9 digitos. ");
            return;
        }
        var correo = document.getElementById("email").value; 
        if (!/^[a-zA-Z0-9]+[a-zA-Z0-9._]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z.]+/.test(correo)){
            alert("La dirección de email es incorrecta.");
            return;
        }
        else{
            alert("¡¡¡ Registro Completado / Todos los Datos Ingresados Correctamente !!!");        
        }
        
}








let rutForm = document.getElementById("Rut");
let nombreForm = document.getElementById("nombre");
let apellidoForm = document.getElementById("Apellido");
let telefonoForm = document.getElementById("phone");
let correoForm = document.getElementById("email");



function validarm(){
               
    var rut = validarRut(document.getElementById("Rut").value);
    if (rut == false){
        alert("Rut incorrecto");
        return;
    }
    
    var nombre = document.getElementById("nombre").value;
    if(nombre.trim().length == 0){
        alert("Error, el nombre del objeto es obligatorio.");
        return;
    }
    var apellido = document.getElementById("Apellido").value;
    if(apellido.trim().length == 0){
        alert("Error, el Apellido Paterno es obligatorio.");
        return;
    }

    var telefono = document.getElementById("phone").value;
    if( !(/^\d{9}$/.test(telefono)) ) {
        alert("Error, el numero de telefono debe contener 9 digitos. ");
        return;
    }

    var correo = document.getElementById("email").value; 
    if (!/^[a-zA-Z0-9]+[a-zA-Z0-9._]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z.]+/.test(correo)){
        alert("La dirección de email es incorrecta.");
        return;
    }

}