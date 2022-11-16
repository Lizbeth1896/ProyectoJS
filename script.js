//porcentaje de mujeres y varones//

let cantmujer = parseInt(prompt("Ingrese la cantidad de mujeres"))
let cantvaron = parseInt(prompt("Ingrese la cantidad de varones"))
let cantestudiante = cantmujer + cantvaron

let totalmujer = cantmujer / cantestudiante * 100
let totalvaron = cantvaron / cantestudiante * 100

Mensaje = `El porcentaje de Mujeres equivale a: ${totalmujer} % <br> 
 y el porcenatje de Varones equivale a: ${totalvaron} %`
document.write(Mensaje)

//Ejercicio 2
let monto = parseFloat(prompt("Ingrese el monto de inversión en soles"))
let Amar = monto * 0.35
let Aabancay = monto * 0.25
let Ajulio = monto * 0.10
let Aaviacion = monto * 0.15
let Atacna = monto * 0.15

alert("El monto de inversión a la Av La Mar fue: s/."+Amar+
", Av. Abancay: s/."+Aabancay+", A la Av 28 de Julio: s/."+Ajulio+
", A la Av Aviación: s/."+Aaviacion+" y por último a la Av Tacna: s/."+Atacna)

//Ejercicio 3
let general = prompt("Cantidad de Entradas generales vendidas")
let mayores = prompt("Cantidad de Entradas para mayores de 65 años vendidas")
let menores = prompt("Cantidad de Entradas para menores de edad vendidas")

let egeneral = general * 150
let emayores = mayores * 50
let emenores = menores * 80

Mensaje = `El monto en Entradas generales fue: s/.${egeneral} <br>  
Monto de Entradas para mayores de 65 años fue: s/.${emayores} <br> 
Monto de Entradas para menores de edad fue: s/.${emenores}`
document.write(Mensaje)
