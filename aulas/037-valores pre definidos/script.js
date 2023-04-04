// exemplos de valores pre definidos

const ex1 = function(a = 1 , b = 1) { // caso algum valor for underfind ele receberar o valor 1
    c = a * b
    return c  
}

const ex2 = function( name = nameAleatorio()) { //caso o valor name for underfind ira retorna oque esta dentro da funcao nameAleatorio 
    return 'seu nome é ' + name 
}

const nameAleatorio = ()=> {
    return 'SEM NOME'
}

const ex3 = function( [x , y] = [2 , 4] , { a } = { a : 3 } ) { //valores pre definidos com o destructuring 
    return (x + y) * a 
}

console.log(ex3( [2 , 2], { a : 4 } ));
