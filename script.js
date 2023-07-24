
// ejercicio condicionales

// Ejercicio 1
let preguntaEresBello = "";

document.write("Ejercicio 1. Determinar si Eres bellisimo/a? ");
preguntaEresBello = prompt("Ejercicio 1. ¿Eres bellisimo/a?");
console.log("Respuesta es:" , preguntaEresBello);

console.log(preguntaEresBello.toUpperCase() );

if(preguntaEresBello.toUpperCase() == "SI")
{
    console.log("Ciertamente");
    alert("Ciertamente");
    document.write("Ciertamente");
}
if(preguntaEresBello.toUpperCase() == "NO")
{
    console.log("No te creo");
    alert("No te creo")
    document.write("No te creo");
    
}
if(preguntaEresBello.toUpperCase() != "SI" && preguntaEresBello.toUpperCase() != "NO" )
{
    alert("Respuesta no valida. Por favor responda Si o No.");
    document.write(" Respuesta diferente a SI o NO");
}

// Ejercicio 2

let divisible = 0;
let numero = 0;

document.write( "<br>" + "Ejercicio 2. Determinar es divisible entre 2? ");
numero = prompt("Ejercicio 2. Digite un numero: ");
console.log(preguntaEresBello);
if (numero % 2 === 0) 
{   
    alert("Es divisible por 2 ");
    document.write("Es divisible por 2 ");
} 
else 
{
    alert("No es divisible por 2 ");
    document.write("No es divisible por 2 ");
}

// Ejercicio 3. Crear un programa que determine si un número introducido en un 
// Prompt es par o no, la respuesta será mostrada en un Alert

let numero3 = 0;

document.write( "<br>" + "Ejercicio 3. Determinar si es par o no? ");
numero3 = prompt("Ejercicio 3. Digite un numero: ");
if(numero3%2==0)
{        
    alert("El número "+numero3+" es par");
    document.write(" El numero "+numero3+ " es Par");

}
else
{  
    alert("El número "+numero3+" es impar");
    document.write("El número "+numero3+" es impar");    
}

//Ejercico 4. olicitar al usuario un número de cliente. Si el número es el 1000, 
//imprimir 'Ganaste un premio', 
//en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let numero4 = 0;
document.write( "<br>" + "Ejercicio 4. determinar si gano premio o no? ");
numero4 = prompt("Ejercicio 4. Por favor ingresar un numero de cliente: ");
if(numero4 == 1000)
{
    alert("Ganaste un premio");    
    document.write("Ganaste un premio");    
}
else
{
    alert("Número "+numero4+" Lo sentimos, sigue participando");    
    document.write("Número "+numero4+" Lo sentimos, sigue participando");    
}

//Ejercicio 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
//No considerar el caso en que ambos números son iguales.

document.write( "<br>" + "Ejercicio 5. ingrese dos números y mostrar cuál de los dos es menor? ");
let numero5 = 0;
let numero6 = 0;
numero5 = prompt("Ejercicio 5. Por favor ingresar un numero: ");
numero6 = prompt("Ejercicio 5. Por favor ingresar un numero: ");

if (numero5 < numero6)
{
    alert("Número "+numero5+" es el menor");
    document.write("Número "+numero5+" es el menor");
}
if (numero5 > numero6)
{
    alert("Número "+numero6+" es el menor");
    document.write("Número "+numero6+" es el menor");
}
if (numero6==numero5)
{
    alert("Los numeros Son Iguales");
    document.write("Los numeros Son Iguales");
}

//  ejercicio 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor.
//Considerar el caso en que 2 números sean iguales.

document.write( "<br>" + "Ejercicio 6. ingrese 3 números y mostrar cuál es mayor? ");
let numero7 = 0;
let numero8 = 0;
let numero9 = 0;
let mayor = "";
numero7 = prompt("Ejercicio 6. Por favor ingresar el primer numero: ");
numero8 = prompt("Ejercicio 6. Por favor ingresar el segundo numero: ");
numero9 = prompt("Ejercicio 6. Por favor ingresar el tercer numero: ");
if(parseInt(numero7) > parseInt(numero8) && parseInt(numero7) >parseInt(numero9) )
{
    alert("1 El numero mayor es: " + numero7);
    document.write("el numero mayor es: " + numero7);
}
if(parseInt(numero8) > parseInt(numero7) && parseInt(numero8) > parseInt(numero9))
{
    alert("2 El numero mayor es: " + numero8);
    document.write("el numero mayor es: " + numero8);
}
if(parseInt(numero9) > parseInt(numero7) && parseInt(numero9) > parseInt(numero8))
{
    alert("3 El numero mayor es: " + numero9);
    document.write("el numero mayor es: " + numero9);
}

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
// otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
//Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

//8. Solicitar al usuario una calificación (entre 1 y 10). 
//Luego se debe comprobar que el número efectivamente esté en ese rango, 
//si no lo está imprima un mensaje de error. 
//Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, 
//“bien” si es 9, y por último, “excelente” si es 10.

document.write( "<br>" + "Ejercicio 8. Resultado de la Calificación ? ");
let numero10 = 0;

numero10 = prompt("Ejercicio 8. Por favor ingresar una calificacion (entre 1 y 10): ");
if(parseInt(numero10) < 1 || parseInt(numero10)>10)
{
    alert("Error el numero " + numero10 +" esta fuera del rango permitido " );
    document.write("Error el numero " + numero10 +" esta fuera del rango permitido " );
}
if(parseInt(numero10) < 6)
{
    alert("Calificacion " + numero10 + " Reprobado");
    document.write("Calificacion " + numero10 + " Reprobado");
}
if(parseInt(numero10) >= 6 && parseInt(numero10) <=8)
{
    alert("Calificacion " + numero10 + " regular");
    document.write("Calificacion " + numero10 + " regular");
}
if(parseInt(numero10) == 9 )
{
    alert("Calificacion " + numero10 + " bien");
    document.write("Calificacion " + numero10 +" bien");
}
if(parseInt(numero10) == 10 )
{
    alert("Calificacion " + numero10 + " excelente");
    document.write("Calificacion " + numero10 + " excelente");
}