var btnLigar = document.querySelector('#ligar')
var btnDesligar = document.querySelector('#desligar')
var lampada = document.querySelector('#lampada')

function verificarLamapda() {
    
    return lampada.src.indexOf('quebrada') > -1
}

function desligarLamp() {
    if (verificarLamapda() == false) {
    lampada.src ='imagens/desligada.jpg'
    console.log('desligou');
    }
} 

function ligarLampada() {
    if (verificarLamapda() == false) {
    lampada.src ='imagens/ligada.jpg'
    console.log('ligou');
    }
}

function quebrarLampada() {
    lampada.src ='imagens/quebrada.jpg'
}

btnDesligar.addEventListener('click', desligarLamp )
btnLigar.addEventListener('click', ligarLampada)
lampada.addEventListener('dblclick', quebrarLampada)

