//Object.keys() pega todas as chaves do objetos

const objkey = (function() {
    const pessoa = {
        nome: 'Daniel',
        idade: '19 year',
        sexo: 'Masculino'
    }
    
    return Object.keys(pessoa)
})()

//Object.values() retorna todos os valores do objetos

const objval = (function() {
    const pessoa = {
        nome: 'Daniel',
        idade: '19 year',
        sexo: 'Masculino'
    }
    
    return Object.values(pessoa)
})()

const objval1 = (function() {
    const pessoa = {
        nome: 'Daniel',
        idade: '19 year',
        sexo: 'Masculino'
    }
})()