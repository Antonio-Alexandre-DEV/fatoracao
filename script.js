
let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let img = new Image();
img.src ="./assets/1.jpg";

img.onload = desenharImg;

function desenharImg(){

    ctx.drawImage(this, 0,0, 1500,1000);
}

function fatorar() {

    let saida = document.getElementById('saida');
    let n= Number(document.getElementById('fnum').value);

    saida.innerHTML += `<h2>Calculando ${n} ! </h2>` 
    let i = n;
    let fat = 1;
    while (i > 1) {
        saida.innerHTML += `${i} x `;
        fat *= i; // corresponde ao calculo fat = fat * i
        i --

    }

    saida.innerHTML += `1 = <strong> ${fat.toLocaleString ('pt-BR') }</strong>`;
}

 //toLocaleString por quê? Para aparecer os separadores de milhar,milhoes...

 // referencia - github.com/gustavoguanabara/javascript