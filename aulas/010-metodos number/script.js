// Number() Retorna um número, convertido a partir de seu argumento.

//parseFloat() Analisa seu argumento e retorna um número de ponto flutuante

//parseInt() Analisa seu argumento e retorna um inteiro

//valueOf() ver o valor do numero 

const valueof = (function() {
    let num1 = 100
    
    return num1.valueOf()
})

//toString() tranforma o numero em string

const tostring = (function() {
    let num1 = 150
    
    nStr = num1.toString() //Retorna string
    nbin = num1.toString(2) //Retona no formato binário
    
    return nbin
})()

//toFixed() limita numeros com casas decimais

const tofixed = (function() {
    let num1 = 12.543
    let num2 = 100
    
    let nFix = num1.toFixed(2)
    let eNotation = num2.toExponential() //formata em notação eletronica
    
    return eNotation
    
})()

//toPrecision limita o tamanho do numero

const toprecision = (function() {
    let num1 = 12.579
    
    let nToPre = num1.toPrecision(4)
    
    return nToPre
})()

/*MAX_VALUE Retorna o maior número possível em JavaScript
MIN_VALUE Retorna o menor número possível em JavaScript
NEGATIVE_INFINITY Representa o infinito negativo(devolvido na overflow)
NaN Representa um valor "Not-a-Number"
POSITIVE_INFINITY Representa o infinito(devolvido na overflow)*/

const propiedades = (function() {
    let max = Number.MAX_VALUE
    let min = Number.MIN_VALUE
    let nan = Number.NaN
    
    return min
})()

console.log(propiedades);