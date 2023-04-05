// preventExtensions

const obj01 = {
    nome1 : 'Carlos',
}

Object.preventExtensions(obj01) // nao deixa que tenha atribuição a esse objeto

obj01.nome2 = 'Jose'

// console.log(obj01);

// seal

const obj02 = {
    idade : 23
}

Object.seal(obj02) // nao deixa que aconteça atribuiçao de valores os objeto nem delete 

obj02.idade = 19 // ediçao de obj eh permitida

//console.log(obj02);

// freeze

const obj03 = {
    n1 : 1
}

Object.freeze(obj03) // nao deixa que qualque alteração seja feita com o objeto

delete obj03.n1

// console.log(obj03);