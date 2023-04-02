var body = document.querySelector('body')

var div = document.querySelector('#teste')

var li = document.createElement('li');

var divBefore = document.createElement('div')

div.classList = 'div-before'

var ul = document.querySelector('ul')

var ulli = document.querySelectorAll('ul li')

var textNode = document.createTextNode('veiculo')

li.appendChild(textNode)

divBefore.appendChild(textNode)

ul.appendChild(divBefore)

var divB2 = document.querySelector('ul .div-before')

console.log(divB2);

