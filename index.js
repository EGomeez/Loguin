let correo = document.querySelector('')
let contraseña = document.querySelector('')
let continuar = document.querySelector('')
let crearCuenta = document.querySelector('')

let usuario = '' 
let premium = usuario

if (usuario === '') {
    console.log("Autorizado");
}
else if (premium === ''){
    console.log("Autorizado");
    setTimeout(() => {
        console.log("con privilegios");
    }, 2000);
}
else {
    console.log("No estas registrado");
    setTimeout(() => {
        console.log("Para ingresar crea una cuenta");
    }, 2000);
}

