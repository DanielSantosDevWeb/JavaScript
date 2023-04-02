const Dev = function(nome, sobrenome, idade) {
    this.nome = nome, 
    this.sobrenome = sobrenome, 
    this.idade = idade
}

const DevFront = function(nome, sobrenome, idade, framework){
    const newDev = new Dev(nome, sobrenome, idade, framework)
    newDev.framework = framework
    
    Object.setPrototypeOf(this , newDev)
}

const DevBack = function(nome, sobrenome, idade, framework ) {
    const newDev = new Dev(nome, sobrenome, idade, framework)
    newDev.framework = framework
    
    Object.setPrototypeOf(this, newDev)
}

const dev01 = new DevFront('Daniel','Santos', '19', 'Java')

const dev02 = new DevBack('jose', 'Silva', '34', 'HTMl')

console.log(dev01);
console.log(dev02);