function exibirCb(num) {
    console.log('o resultado foi: '+ num);
}

function somar(n1, n2, callback) {
    var soma = n1 + n2
    callback(soma)
}

function menos(n1, n2, callback) {
    var menos = n1 - n2 
    callback(menos)
}

somar(6, 6, exibirCb)

menos(10, 3, exibirCb)

//Exemplo Dois

const bemVindo = (nome)=> alert('Ola ' + nome + ', Seja Bem vindo!!')

const chamarNome = (cb)=> {
    const nome = prompt('qual seu nome??')
    cb(nome)
}

chamarNome(bemVindo)
