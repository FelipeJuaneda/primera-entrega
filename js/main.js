//Navegador - Header
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    })
}
navSlide();


//Verificacion de edades
function verificarEdad(){
    let edad = document.getElementById("edad").value;

    if ((edad!="") && (edad>=18)) {
        alert("Bienvenido!" + " tu edad es de " + edad+ " años")
    }else{
        alert('DATOS INCORRECTOS - No eres mayor de 18')
    }
}


//CLASE
class Producto{
    constructor(local, precio, espacio){
        this.local=local;
        this.precio=precio;
        this.espacio=espacio;
    }
    //metodos
    descuento(valor){
        this.precio = this.precio - valor;
    }
    mostrar(){
        return "El " + this.local + " cuesta " + this.precio + " pesos POR MES " + "y cuenta con un espacio de " + this.espacio;
    }
}


//ARRAY
const productos= [];
productos.push(new Producto("Local 1", 5000,"3m x 4m"));
productos.push(new Producto("Local 2", 7000, "5,5m x 5m"));
productos.push(new Producto("Local 3", 8000, "6m x 6m"));
productos.push(new Producto("Local 4", 10000, "8 x 7m"));


//IF ELSE - PROMPT SI O NO
let sioNo = prompt('¿Deseas saber locales disponibles?' + '\n' +'Responde con si o no');
if (sioNo=="si") {
    for (const producto of productos) {
        alert("El " + producto.local + " cuesta " + producto.precio+ " pesos POR MES" + "\n"+ " Y cuenta con un espacio de " + producto.espacio)
    }
}   else if(sioNo=="SI") {
    for (const producto of productos) {
        alert("El " + producto.local + " cuesta " + producto.precio+ " pesos POR MES" + "\n"+ " Y cuenta con un espacio de " + producto.espacio)
    }
}   else{
    alert("No hay problema!")
}

//Busqueda
let busquedaLocales = prompt("Ingrese 'Local (con L mayuscula) y su numero' para encontrar");
let encontrado = productos.find(producto=> producto.local == busquedaLocales);
if (encontrado) {
    alert("Local encontrado \n"+encontrado.local+ "\n Cuesta: " + encontrado.precio+ " pesos POR MES \n"+" Y cuenta con un espacio de " + encontrado.espacio)
} else {
    alert("No se encontro local")
}