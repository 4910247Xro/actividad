let num1 = prompt("ingrese numero 1");
let num2 = prompt("ingrese numero 2");
let num3 = prompt("ingrese numero 3");

if (num1 > num2 && num2 > num3) {
    console.log("el numero mayor es num1");
} else if (num2 > num1 && num1 > num3) {
    console.log("el numero mayor es num2");
} else {
    console.log("el numero mayor es num3");

}