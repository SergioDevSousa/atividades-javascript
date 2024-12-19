const { gets, print } = require('./funcoes-auxiliares');

const n = Number(gets());
// maior numero par = 10
// menor numero impar = 1
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++){
    const numeros = Number(gets())
    // se o numero for par
    if (numeros % 2 === 0){
        //condição OR avalia se a esquerda é true ou false senão avalia a direta
        if (maiorNumeroPar === null || numeros > maiorNumeroPar){
            maiorNumeroPar = numeros;
        }
    //se for impar cai no else
    }else{
        //avalia na condição OR (||) esqueda ou direita
        if(menorNumeroImpar === null || numeros < menorNumeroImpar){
            menorNumeroImpar = numeros;
        }
    }
}
//usamos o operador termario ? para dizer o maior par e o menor impar, caso contrário não encontrado
print(maiorNumeroPar !== null ? maiorNumeroPar : "Nunhum numero par encontrado.");
print(menorNumeroImpar !== null ? menorNumeroImpar : "Nenhum numero impar encontrado.");
