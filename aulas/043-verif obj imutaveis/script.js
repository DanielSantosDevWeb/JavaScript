
const objExtensivel = {
    nome : 'Carlos '
}

const objSelado = {
    nome : 'Carlos '
}

const objCongelado = {
    nome : 'Carlos '
}

console.log(Object.isExtensible(objExtensivel));
console.log(Object.isSealed(objSelado));
console.log(Object.isFrozen(objCongelado));

console.log('\n\n');

Object.preventExtensions(objExtensivel)
Object.seal(objSelado)
Object.freeze(objCongelado)

console.log(Object.isExtensible(objExtensivel));
console.log(Object.isSealed(objSelado));
console.log(Object.isFrozen(objCongelado));

