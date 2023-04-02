const arrayN1 = [1, 3, 4, 6]
const arrayN2 = [2, 5, 7, 8]

const total = [...arrayN1, 22, 34,  ...arrayN2] //cria um novo array juntando os arrays dentro

console.log(total);

const obj1 = { nome: 'tu', sobre: 'eu'}
const obj2 = { tipo: 'pes', para: 'ti'}

const totalobj = {...obj1, ...obj2} //cria um novo obj com os obj relacionados dentro

console.log(totalobj);