var pessoa = {
    nome:'Carlos Daniel', 
    sobrenome:'Santos', 
    carro: {
        placa: '379-fe8', 
        marca: 'fiat', 
        km: 70, 
        kmr: function() {
            this.km += 10
            console.log(this);
        }
    }
    
}

console.log(pessoa.carro.km);
pessoa.carro.kmr()
console.log(pessoa.carro.km);
pessoa.carro.kmr()
console.log(pessoa.carro.km);
pessoa.carro.kmr()