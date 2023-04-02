//For loop basico 

for ( let n1 = 1 ; n1 <= 10; n1++) {
    console.log(n1);
}

//For/Of loop de array percorre o array

var frutas = ['maçã', 'banana', 'verduras', 'mamao']

for (let f in frutas) { 
    console.log(f); // percorre toda a array 
}

for (let fname of frutas) {
    console.log(fname); //mostra todos os valores do array
}