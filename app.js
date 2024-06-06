let numero1 = '';
let numero2 = '';
let liberar = document.getElementById('liberar');
let op = '';
let resultado = 0;

function numero(a) {


    if (liberar.id != 'liberar') {
        numero2 += a;
        let textoTela2 = document.querySelector('#numero2')
        textoTela2.innerHTML = numero2;
    } else {
          numero1 += a;
        let textoTela1 = document.querySelector('#numero1')
        textoTela1.innerHTML = numero1;
    }
}

function operador(b) {
    let sinal = document.getElementById('oper');
    
    switch (b) {
        case 0:
            op = 'mais';
            sinal.textContent = '+';
            break;
        
        case 1:
            op = 'menos';
            sinal.textContent = '-';
            break;
        
        case 2:
            op = 'divisao';
            sinal.textContent = '/';
            break;
        case 3:
            op = 'multiplicacao';
            sinal.textContent = 'x';
            break;        
        default:
            break;
    }
    
    
    liberar.id = '';
}

function calcular() {
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    switch (op) {
        case 'mais':
            resultado = numero1 + numero2;
            break;
        
        case 'menos':
            resultado = numero1 - numero2;
            break;

        case 'divisao':
            resultado = numero1 / numero2;
            break;
            
        case 'multiplicacao':
            resultado = numero1 * numero2;
            break;      
        default:
            console.log('Deu erro :(')
            break;
    }
    let textoResultado = document.getElementById('resul');
    textoResultado.textContent = resultado;
    let botoes = document.querySelectorAll('.botoes');
    botoes.forEach(button => {button.disabled = true;})
   
}

function apagar() {
    numero1 = '';
    numero2 = '';
    liberar.id = 'liberar';
    textoTela2 = document.querySelector('#numero2')
    textoTela2.innerHTML = '';
    textoTela1 = document.querySelector('#numero1')
    textoTela1.innerHTML = '';
    sinal = document.getElementById('oper');
    sinal.textContent = '';
    textoResultado = document.getElementById('resul');
    textoResultado.textContent = '';
    let botoes = document.querySelectorAll('.botoes');
    botoes.forEach(button => {button.disabled = false;})
}

function diferentes(c) {
    
    
    switch (c) {
        case 0:
            numero1 = parseFloat(numero1);
            resultado = Math.sqrt(numero1);
            let textoResultado = document.getElementById('resul');
            textoResultado.textContent = resultado;
            let botoes = document.querySelectorAll('.botoes');
            botoes.forEach(button => {button.disabled = true;})
            break;
        
        
    }
    
    
    
}