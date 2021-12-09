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
 

function perimetroTriangulo (lado, lado2, base){
    lado = parseInt(lado)
    lado2 = parseInt(lado2)
    base = parseInt(base)
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


//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado")
   const value = input.value
   const perimetro = perimetroCuadrado(value)
   alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)

}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("ladoA")
    const input2 = document.getElementById("ladoB")
    const input3 = document.getElementById("base")

    const value = input.value
    const value2 = input2.value
    const value3 = input3.value

    const perimetro = perimetroTriangulo(value,value2,value3)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const input = document.getElementById("base")
    const input2 = document.getElementById("altura")
    const base = input.value
    const altura = input2.value
    const area = areaTriangulo(base,altura)
    alert(area)
}