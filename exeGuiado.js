const { gets, print } = require('./funcoes-auxiliares');

const nota1 = parseFloat(gets());
const nota2 = parseFloat(gets());
const nota3 = parseFloat(gets());

const media = (nota1 + nota2 + nota3)/ 3;


if (media >= 0 && media < 5){
    print("reprovado");
}else if(media >= 5 && media < 7){
    print("recuperação");
}else if (media >= 7){
    print("aprovado");
}else{
    print("dados inválidos");
}
