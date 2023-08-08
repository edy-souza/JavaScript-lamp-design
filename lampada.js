const botao = document.getElementById('botao');
const lampada = document.getElementById('lampada');
const botaoDesligar = document.getElementById('botaoDesligar');
const botaoQuebrar = document.getElementById('botaoQuebrar');
const botaoPiscar = document.getElementById('botaoPiscar')

function acenderLampada() {
    if (botao.value === "ligar") {
        lampada.src = './img/Lampada.jpeg'
    }
}
function apagarLampada() {
    if (botaoDesligar.value === "desligar") {
        lampada.src = './img/LampApagada.jpeg'
    }
}
function quebrarLampada() {
    if (botaoQuebrar.value === "quebrar") {
        lampada.src = './img/LampQuebrada.jpeg'
    }
}
function piscarLampada() {
    let contador = 0;
    let intervalo = 0;
    while (contador < 10) {
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='./img/Lampada.jpeg';", intervalo);
        intervalo += 300
        setTimeout("document.getElementById('lampada').src='./img/LampApagada.jpeg';", intervalo);
        contador++;
    }
}