var mes = prompt("Ingrese el número de su mes de nacimiento (1-12):");
var dia = prompt("Ingrese el número de su día de nacimiento (1-31):");

var mesNacimiento = parseInt(mes);
var diaNacimiento = parseInt(dia);

var signo = "";

if ((mesNacimiento == 3 && diaNacimiento >= 21) || (mesNacimiento == 4 && diaNacimiento <= 20)) {
    signo = "Aries";
} else if ((mesNacimiento == 4 && diaNacimiento >= 21) || (mesNacimiento == 5 && diaNacimiento <= 20)) {
    signo = "Tauro";
} else if ((mesNacimiento == 5 && diaNacimiento >= 21) || (mesNacimiento == 6 && diaNacimiento <= 20)) {
    signo = "Géminis";
} else if ((mesNacimiento == 6 && diaNacimiento >= 21) || (mesNacimiento == 7 && diaNacimiento <= 22)) {
    signo = "Cáncer";
} else if ((mesNacimiento == 7 && diaNacimiento >= 23) || (mesNacimiento == 8 && diaNacimiento <= 23)) {
    signo = "Leo";
} else if ((mesNacimiento == 8 && diaNacimiento >= 24) || (mesNacimiento == 9 && diaNacimiento <= 22)) {
    signo = "Virgo";
} else if ((mesNacimiento == 9 && diaNacimiento >= 23) || (mesNacimiento == 10 && diaNacimiento <= 23)) {
    signo = "Libra";
} else if ((mesNacimiento == 10 && diaNacimiento >= 24) || (mesNacimiento == 11 && diaNacimiento <= 22)) {
    signo = "Escorpio";
} else if ((mesNacimiento == 11 && diaNacimiento >= 23) || (mesNacimiento == 12 && diaNacimiento <= 21)) {
    signo = "Sagitario";
} else if ((mesNacimiento == 12 && diaNacimiento >= 22) || (mesNacimiento == 1 && diaNacimiento <= 20)) {
    signo = "Capricornio";
} else if ((mesNacimiento == 1 && diaNacimiento >= 21) || (mesNacimiento == 2 && diaNacimiento <= 19)) {
    signo = "Acuario";
} else if ((mesNacimiento == 2 && diaNacimiento >= 20) || (mesNacimiento == 3 && diaNacimiento <= 20)) {
    signo = "Piscis";
} else {
    signo = "No se pudo determinar (revisa los números)";
}

alert("Tu signo zodiacal es: " + signo);