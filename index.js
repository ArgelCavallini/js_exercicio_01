var numero1 = parseFloat(prompt("Insira o primeiro número:"))
var numero2 = parseFloat(prompt("Insira o segundo número:"))

var soma = numero1 + numero2
var subtracao = numero1 - numero2
var multiplicacao = numero1 * numero2
var divisao = numero1 / numero2
var resto = numero1 % numero2
var somaPar = soma % 2 === 0 ? "par" : "ímpar"
var saoIguais = numero1 === numero2 ? "iguais" : "diferentes"

console.log("Soma: " + soma)
console.log("Subtração: " + subtracao)
console.log("Multiplicação: " + multiplicacao)
console.log("Divisão: " + divisao)
console.log("Resto da divisão: " + resto)
console.log("A soma dos dois números é " + somaPar)
console.log("Os números inseridos são " + saoIguais)