const h3Title = document.createElement('h3')

var textNode = document.createTextNode('Meu titulo h3')

h3Title.appendChild(textNode)

//adicionar o elemento q vai s er trocado

const h1Title = document.querySelector('h1')

//adicionar o pai do elemento

const pai = h1Title.parentNode;

//trocar o elemento (new element, old element)

pai.replaceChild(h3Title, h1Title)

console.log(pai);
