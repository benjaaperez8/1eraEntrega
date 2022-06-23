/*
// CONDICION
let edad = 18;
if(edad==18){
    alert("Tu puedes entrar a nuestra pagina")
}else {
    alert("Este contenido es prohibido para ti")
}


//CICLOS

let num;

do {
    num = prompt("Ingresa un numero mayor a 100", 0);

} while (num <= 100 && num);.

*/

//SIMULADOR

var cantidad, precio, desc, compra,pagar;

precio = parseFloat(prompt("Ingresar Precio"));
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra = precio * cantidad;
desc = compra*0.15;
pagar = compra-desc;

alert("El descuento es: "+desc);
alert("El total a pagar es: "+pagar);
