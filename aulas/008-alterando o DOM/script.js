var body = document.body;

var para = document.createElement('p');

var texto = document.createTextNode('amor');

para.appendChild(texto);

body.appendChild(para);

console.log(body);

console.log(para);