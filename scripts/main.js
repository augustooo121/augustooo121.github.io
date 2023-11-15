// const miTitulo = document.querySelector("h1");
// miTitulo.textContent = "¡Hola mundo!";

// CONDICIONALES
let helado = "chocolat";
    if (helado === "chocolate") {
        alert("¡Sí, amo el helado de chocolate!");
    } else {
        alert("Awwww, pero mi favorito es el de chocolate...");
    }

// FUNCIONES
function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
  }

// AL HACER CLICK MUESTRA EL ALERT
// document.querySelector("html").onclick = function () {
//     alert("¡Ouch! ¡Deja de pincharme!");
//   };


// CAMBIAR IMAGEN AL HACER CLICK

let miImage = document.querySelector("img");
  miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
        if (miSrc === "images/pelota-2010.jpg") {
                miImage.setAttribute("src", "images/pelota-2022.jpg");
                miImage.setAttribute("title", "Pelota Mundial 2022");
        } else {
            miImage.setAttribute("src", "images/pelota-2010.jpg");
            miImage.setAttribute("title", "Pelota Mundial 2010");
            
        }
    };
  
// MENSAJE DE BIENVENIDA PERSONALIZADO

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial, " + miNombre;
  }

//   La función estableceNombreUsuario() contiene una función prompt(), que crea un cuadro de diálogo como lo hace alert();
//  la diferencia es que prompt() pide al usuario un dato, y almacena este dato en una variable cuando el botón Aceptar del
//  cuadro de diálogo es presionado. En este caso, pedirás al usuario que ingrese su nombre. Luego, llamarás la API localStorage,
//  que nos permite almacenar datos en el navegador y recuperarlos luego. Usarás la función setItem() de localStorage, que crea y
//  almacena un dato en el elemento llamado 'nombre', y coloca este valor en la variable miNombre que contiene el nombre que el usuario
//  ingresó. Finalmente, establecerás el textContent del título a una cadena, más el nombre de usuario recientemente almacenado.

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
  }

// Para cambiar el nombre al presionar el botón
miBoton.onclick = function () {
    estableceNombreUsuario();
  };

// ACTUALIZACIÓN DE LA FUNCIÓN 
// No permite poner un valor null en el prompt

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  }
  
