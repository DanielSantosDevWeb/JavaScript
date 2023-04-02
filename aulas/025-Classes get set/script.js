class Carro {
    
    constructor(marca, placa, ano, preco) {
        this._marca = marca
        this._placa = placa
        this._ano = ano
        this._preco = preco 
    }
    
    chamarDetra() {
        return `O seu carro da marca ${this.marca}, placa ${this.placa} e o ano de fabricação ${this.ano} tem o preço medio de ${this.preco} Mil reais `
    }
    
    get marca() {
        return this._marca
    }
    
    get ano() {
        return this._ano
    }
    
    get placa() {
        return this._placa
    }
    
    get preco() {
        return this._preco
    }
    
    set marca(newMarca) {
        this._marca = newMarca
    }
    
}

var carro1 = new Carro('camaro', 'F58-G59', 2013, 98.000 )

console.log(carro1);

console.log(carro1.chamarDetra());

console.log(carro1.marca);

console.log(carro1.ano);

console.log(carro1.placa);

console.log(carro1.preco);

carro1.marca = 'Chevrolet'

console.log(carro1.marca);

var carro2 = new Carro('fiat Uno', 'A5T-GG3', 1998, 10.000)

