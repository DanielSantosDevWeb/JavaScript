var body = document.querySelector('body')

var div = document.querySelector('#teste')

// remove() apaga toda a tag selecionada

var ul = document.querySelector('#teste ul').remove()

var p = document.querySelector('#teste p') 

// removeChild() remove o elemeto filho selecionado

div.removeChild(p)

console.log(ul, p);