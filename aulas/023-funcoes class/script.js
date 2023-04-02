//criando obj

const Livro = {
    nome: 'O Enigma', 
    ano: 1998, 
    autor: 'Carlos Daniel ', 
    editora: 'Saraiva', 
    ativo: true, 
    anuciar: function() {
        console.log('O livro '+ this.nome + ' lançado em '+ this.ano + ', Foi publicado pela '+ this.editora);
    }
}

//Livro.nome = "'O magico de OZ'"

//Livro.anuciar()

//criando com funções para receber parâmetros

const Livro2 = function(nome, ano, autor, ativo) {
    nomeL = nome
    anoL = ano 
    autorL = autor
    ativoL = ativo 
    this.nomeLivro = function(){
        return nomeL
    }
    this.anoLivro = () => {
        return anoL
    }
    this.autorLivro = () => {
        return autorL
    }
    this.ativoLivro = () => {
        if (ativoL == true) {
            return 'o livro esta ativo'
        } else {
            return 'o livro não esta ativo'
        }
    }
}

const OMagicoDeOz = new Livro2('O magico de OZ', 1998, 'Carlos Daniel', true)

console.log(OMagicoDeOz.nomeLivro());
console.log(OMagicoDeOz.anoLivro());
console.log(OMagicoDeOz.autorLivro());
console.log(OMagicoDeOz.ativoLivro());

//Exemplo 2

const systemVel = function ( distancia, tempo) {
    distancia = distancia
    tempo = tempo
    velocidade = 0
    this.velocidadeMedia = function() {
        velocidade = distancia / tempo + 'km/h'
        return velocidade
    }
    this.alertSystem = ()=> {
        return `sua velocidade media é de ${velocidade}, precorreu ${distancia}km no tempo de ${tempo} horas`
    }
}

const velocidade1 = new systemVel(100, 2)

console.log(velocidade1.velocidadeMedia());

console.log(velocidade1.alertSystem());
