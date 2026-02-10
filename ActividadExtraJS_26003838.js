
var jugarOtraVez = "SI";

do {
    
    var numeroComputadora = Math.floor(Math.random() * 9) + 1;

    
    var numeroUsuario;
    var numeroValido = false;

    while (!numeroValido) {
        numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
        
        if (numeroUsuario >= 3 && numeroUsuario <= 6) {
            numeroValido = true;
        } else {
            alert("Número fuera de rango. Por favor, ingrese un número entre 3 y 6.");
        }
    }

    
    var adivinanza = prompt("¿Su número es MAYOR, MENOR o IGUAL al de la computadora?").toUpperCase();

    
    var relacionReal = "";
    if (numeroUsuario > numeroComputadora) {
        relacionReal = "MAYOR";
    } else if (numeroUsuario < numeroComputadora) {
        relacionReal = "MENOR";
    } else {
        relacionReal = "IGUAL";
    }

    
    var mensajeResultado = "La computadora eligió " + numeroComputadora + ", usted eligió " + numeroUsuario + ".\n";
    
    if (adivinanza === relacionReal) {
        alert(mensajeResultado + "Su elección es " + relacionReal + ". ¡Ha adivinado!");
    } else {
        alert(mensajeResultado + "Su elección es " + relacionReal + ". No ha adivinado.");
    }

    
    jugarOtraVez = prompt("¿Quiere jugar otra vez? (SI / NO)").toUpperCase();

} while (jugarOtraVez === "SI");


alert("Programa finalizado.\nNombre: [Jorge Emanuel Gonzalez Cano]\nCarnet: [26003838]");