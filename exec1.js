let Ncinquenta, Ncem, Ndez,retirada

retirada = parseFloat(prompt("Digite quanto quer retirar"))

if(retirada % 10 !== 0){
    document.write(`valor invalido`)
}else{
    valor = retirada

    Ncem = Math.floor(valor / 100)
    valor %= 100

    Ncinquenta = Math.floor(valor / 50)
    valor %= 50

    Ndez = Math.floor(valor / 10)

    document.write(`Notas de 100 ; ${cem}\n Notas de 50 ${cin} Notas de 10 ${dez}`)
}