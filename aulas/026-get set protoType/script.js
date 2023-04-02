const animal = { // Cria o obj
    som: 'Um som de animal', 
    nome: 'Animal', 
    fazerSom: function() {
        console.log(this.som);
    }
}

const gato = { // cria um obj com base no primeiro
    som: 'Miau', 
    nome: 'gato', 
}

Object.setPrototypeOf(gato, animal) // junta o obj gato ao obj animal

const gatoRaivoso = { // cria um obj com base no obj gato
    nome: 'gato raivoso', 
    miarForte: function() {
        console.log(this.som.toUpperCase());
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)

//gatoRaivoso.miarForte()

// EXEMPLO 2

const pessoa = {
    comida: 'Algum coisa', 
    nome: '"SEM NOME"' , 
    cidade: '"SEM CIDADE"', 
    
    falar: function() {
        return `ola meu nome é ${this.nome}, e gosto de comer ${this.comida} e moro em ${this.cidade}`
    }
}

const pessoa01 = {
    comida: 'chocolate', 
    nome: 'jose',
    cidade: 'Sapé PB', 
}

Object.setPrototypeOf(pessoa01, pessoa)

const pessoaBrava = {
    
    gritar: function() {
        return this.falar().toUpperCase()
    }
}

Object.setPrototypeOf(pessoaBrava, pessoa01)

console.log(pessoaBrava.gritar());