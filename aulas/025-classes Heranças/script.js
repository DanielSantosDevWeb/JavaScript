class ClassesSociais {
    constructor(nome, salario, emprego) {
        this.nome = nome
        this.salario = salario 
        this.emprego = emprego 
    } 
    
    suaClasseSocial() {
        console.log(`ola ${this.nome}, seu salario eh de ${this.salario}, e trabalha com ${this.emprego}`);
    }
}

class ClasseAlta extends ClassesSociais { //se a associa a uma classe
    constructor(nome, salario, emprego, classe) {
        super() // chama o obj que esta sendo associado
        this.nome = nome
        this.salario = salario 
        this.emprego = emprego 
        this.classe = classe
    } 
    
    suaClasseSocial() {
        console.log(`ola ${this.nome}, seu salario eh de ${this.salario}, você trabalha com ${this.emprego} e esta na parte alta da sociedade`);
    }
}


class ClasseBaixa extends ClassesSociais { // se associa a uma classe
    constructor(nome, salario, emprego, classe) {
        super() // Chama o obj que esta sendo associado
        this.nome = nome
        this.salario = salario 
        this.emprego = emprego 
        this.classe = classe
    } 
    
    suaClasseSocial() {
        console.log(`ola ${this.nome}, seu salario eh de ${this.salario},você trabalha com ${this.emprego} e esta na parte baixa da sociedade`);
    }
}


const classe = new ClassesSociais('Daniel', '1.250', 'Agricultura' )

const classebaixa01 = new ClasseBaixa('Jose', 600, 'desempregado', 'baixa')

const classeAlta01 = new ClasseAlta('maria', '5.300', 'progamador senior', 'alta')

classe.suaClasseSocial()
classeAlta01.suaClasseSocial()
classebaixa01.suaClasseSocial()