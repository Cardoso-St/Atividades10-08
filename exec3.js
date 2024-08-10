let lado1, lado2, lado3, soma

document.write(`Diga os valores dos lados dos triângulos`)
lado1 = parseFloat(prompt(`digite valor do lado 1`))
lado2 = parseFloat(prompt(`digite valor do lado 2`))
lado3 = parseFloat(prompt(`digite valor do lado 3`))

soma = lado1 + lado2

if(lado3 > soma){
    document.write(`Valor inválido, digite novamente`)
} 

if(lado1 == 2 & lado1 == lado3){
    document.write(`Triângulo equilatero`)

} else if(lado1 == lado2 || lado1 == lado3){
    document.write(`Triângulo isoceles`)
} else {
    document.write(`Triângulo escaleno`)
}