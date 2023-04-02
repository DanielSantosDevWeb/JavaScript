const send = document.getElementById('enviar')


function validador() {
    var year = document.getElementById('ano').value
    var sexy = document.getElementsByClassName('sexo').value
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    
    function yearString()  {
        let arrayYear = year.split('')
        arrayYear[7] = ''
        arrayYear[4] = ''
        
        let yearNumber = Number(arrayYear.join(''))
        
        return yearNumber
    }
    
    if (year == '' || sexy == '' || nome == '' || sobrenome  == '') {
        alert('preencha o quadro')
    } 
    ano > yearString() && console.log('você e demenor');
    
    function addCard() {
        const card = document.getElementById('card')
        const perfil = document.createElement('div')
        const img = document.createElement('img')
        
        const infos = document.createElement('div')
        const infoNome = document.createElement('div')
        const infoData = document.createElement('div')
        const infoSexo = document.createElement('div')
        const infoTrabalho = document.createElement('div')
        
        perfil.setAttribute('id', 'perfil')
        img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJsoBXNkpYgU2n6tumkPgqmxjMSW-kz7JgA&usqp=CAU')
        infoNome.setAttribute('id', 'infoNome')
        var infoNomeT = document.createTextNode(nome + sobrenome)
        
        perfil.appendChild(img)
        card.appendChild(perfil)
        
        infoNome.appendChild(infoNomeT)
        //infoNome.appendChild(infos)
        card.appendChild(infoNome)
        
        console.log(infoNome);
        
    } 
    
    addCard()
    
}


send.addEventListener('click', validador)