//String
let nombre = "José";
let apellido = "FERNANDEZ";
let frase = "              Bienvenidos a la clase           ";

//concatenación
console.log(nombre + " " + apellido);
console.log(nombre, apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos propiedades
// mayúscula:
console.log(nombre.toUpperCase());
// minúscula
console.log(apellido.toLowerCase());
// Para saber cuantos caracteres tiene un string:
console.log("El apellido tiene " + apellido.length + " Caracteres");

//eliminar los espacios delante y detrás de un string
let fraseSinEspacio = frase.trim();

//si quiero quitar los espacios en blanco del medio
let sinEspacio = fraseSinEspacio.split(" ");
console.log(sinEspacio.join(""));

//obtener una o varias letras
console.log(apellido.at(0));
// para obtener la última letra:
console.log(apellido.at(-1));

// para obtener determinados caracteres:
console.log(apellido.substring(2, 6));

// Tarea 1
// ------------
// 1 - ingreso el apellido
// 2 - calcular cantidad de caracteres
// 3 - obtener la última letra del apellido



// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
// 1 - Pasarla a mayuscula
// 2 - Capitalizar la palabra (Marmota)
