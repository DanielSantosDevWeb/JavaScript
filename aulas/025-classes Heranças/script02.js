class ClassesSociais { //Criação da classe pai
    constructor(nome, salario, idade ) {
        this.nome1 = nome 
        this.salario1 = salario 
        this.idade1 = idade
    }
    
    suaClasseSocial() {
        console.log(`ola ${nome}, Você tem ${idade} anos, Tem um salario de ${salario}.`);
    }
}

class ClasseAlta extends ClassesSociais { //Chamando a classe pai q esta sendo associada
    constructor(nome, salario, idade, social, horaTrabalho){
        super(nome, salario, idade,) //Pegando as variaveis da classe pai
        this.horaTrabalho1 = horaTrabalhopai //Adicionando novas variaveis
        this.social1 = social
    }
}

class ClassBaixa extends ClassesSociais {
    constructor(nome, salario, idade, social, trabalho) {
        super(nome, salario, idade)
        this.social1 = social
        this.trabalho1 = trabalho
    }
}

const classeAlta01 = new ClasseAlta('Carlos', '5.500', 43, 'alta', '6 horas') // Criando uma nova estância da classe com seus parâmetros

const classeBaixa01 = new ClassBaixa('Daniel', '600', 23, 'baixa', 'desempregado')

console.log(classeAlta01);
console.log(classeBaixa01);