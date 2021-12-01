//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5
console.log("Los lados del cuadrado: " + ladoCuadrado)

function perimetroCuadrado(lado) {
return lado * 4
} 
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado){
    return lado * lado
} 
console.log("El area del cuadrado es: " +areaCuadrado+" cm2")
console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
 

/* console.log("Los lados del triangulo miden " 
+ ladoTriangulo 
+ "cm, " 
+ ladoTriangulo2 
+ "cm y " 
+baseTriangulo + " cm" )

const alturaTriangulo = 5.5
console.log("La base del triangulo es: "+ alturaTriangulo) */

function perimetroTriangulo (lado, lado2, base){
    return lado + lado2 + base
} 
console.log("El perimetro del triangulo es: " + perimetroTriangulo)

function areaTriangulo (base, altura){
    return (base * altura) / 2
} 
console.log("El area del triangulo es: " + areaTriangulo)

console.groupEnd();

console.group("Circulo");

//Radio
/* const radioCirculo = 4
console.log("El radio del circulo es: " + radioCirculo +" cm") */
//Diametro
function diametroCirculo(radio){
   return radio * 2
} 
console.log("El diametro del circulo es: " + diametroCirculo + " cm")

// Pi
const PI = Math.PI
console.log("PI es: " + PI + " cm")

//Circunferencia 
function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}   
console.log("La circunferencia del circulo es: " + circunferenciaCirculo + " cm")

//Área
function areaCirculo(radio){
    return PI * (radio * radio)
} 
console.log("El area del circulo es: " + areaCirculo + " cm")
