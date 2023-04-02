var n1 = 10;
//var e definido para o escopo global
console.log(n1);

function mostraNumeros() {
    var n1 = 20;
    //var não ganha atribuição fora da função (do escopo)
    console.log('var "n1" function '+ n1);
    
}

mostraNumeros();

const numeroConst = 50

let numeroLet = 100

//const e let não ganham atribuição em escopo menores(if else, for, while...)

for( let numeroLet = 0; numeroLet < 10 ; numeroLet ++) {
    console.log(numeroConst);
}