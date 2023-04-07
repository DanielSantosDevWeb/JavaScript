// EXEMPLO 1

const obj = {
    nomes: ['carlos', 'daniel', 'santos'],
    get primeiroNome() {
        return this.nomes.length ? this.nomes[0] : null // get retorna quando a chave do objeto eh chamado

    },
    set primeiroNome(nome) {
        this.nomes.unshift(nome) // set trata o valor que eh recebido pela chave
    }
}

console.log(obj.primeiroNome + '\n'); // "Carlos"

obj.primeiroNome = 'Maria' // a chave primeiroNome recebe "maria" e trata esse valor

console.log(obj.primeiroNome + '\n'); // "Maria"

// EXEMPLO 2 defineProperty

const numeros = {
    num1 : 0
}

Object.defineProperty(numeros, 'addNum1', { // adiciona uma chave ao objeto relacionado

    // get e set sendo criado
    get() {
        console.log(this.num1);
    },

    set(num) {
        this.num1 = num 
    }
} ) 

numeros.addNum1

numeros.addNum1 = 5

numeros.addNum1

numeros.addNum1 = 9

numeros.addNum1

// EXEMPLO 3 Valores computados

const str = 'computada'

const strComputada = {
    name : 'xxx',

    get [str]() {
        console.log(this.name);
    },
    set [str](n) {
        this.name = n
    }
}

strComputada.computada

strComputada.computada = 'era uma vez'

strComputada.computada

strComputada.computada = 'novo mundo'

strComputada.computada

// EXEMPLO 4 Chaves privadas

class NomeSobrenome {
    #nome = 'Carlos'
    #sobrenome = "Daniel"

    get nomeCompleto() {
        console.log(this.#nome + ' ' + this.#sobrenome);
    }

    set nomeCompleto(nome) {
        let nomes = nome.split(" ")

        this.#nome = nomes[0]
        this.#sobrenome = nomes[1]
    }
}

const meuNome = new NomeSobrenome()

meuNome.nomeCompleto

meuNome.nomeCompleto = 'Maria Silva'

meuNome.nomeCompleto

meuNome.nomeCompleto = 'Fernando Jose 1242'

meuNome.nomeCompleto


