const { gets, print } = require('./funcoes-auxiliares');

const batata = gets();
let maiorValorEncontrado = 0;

for(let i = 0; i < batata; i++){
    const numerosSorteados = gets();
    if (numerosSorteados > maiorValorEncontrado){
        maiorValorEncontrado = numerosSorteados;
    }
}

print(maiorValorEncontrado);