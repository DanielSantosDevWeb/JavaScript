var body = document.querySelector('body')

var div = document.querySelector('#teste')

var text = document.createTextNode('esse eh meu paragrafo')

var p = document.createElement('p')

p.appendChild(text)

div.appendChild(p)

console.log(div);
console.log(body);