function enderecoCompleto( endereco, numero, complemento){
    return `Endereço: ${endereco} Nº ${numero} Complemento: ${complemento}`;
}

function numero(){
    return '15';
}
function complemento(){
    return 'Casa';
}

const endereco = enderecoCompleto('Rua Ozório Veloso', numero(),complemento());
console.log(endereco);