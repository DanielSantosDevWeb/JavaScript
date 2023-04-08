//LocalStorage salva dados no computador do cliente sem tempo se expiracao 

//Adicionando um item

localStorage.setItem('n1', 1)

localStorage.setItem('n2', '2')

//Chamando um item

const numero1 = localStorage.getItem('n1')

console.log(numero1);

//Removendo um item 

localStorage.removeItem('n2')

//Limpamdo LocalStorage

localStorage.clear()

//salvando objeto no LocalStorage

const pessoa = {
    nome: 'Carlos',
    idade: 19,
    localidade: 'Sape, PB'
}

//Tranforma o objeto em json 

localStorage.setItem('pessoa', JSON.stringify(pessoa))

//Removendo e tranformando em objeto novamente

const pessoaTexto = localStorage.getItem('pessoa')

const pessoa2 = JSON.parse(pessoaTexto)

console.log(pessoa2);


