const { gets, print } = require("./funcoes-auxiliares");

const salario = parseFloat(gets());
const beneficio = parseFloat(gets());

//regra de imposto:
//de R$ 0.00 a R$ 1100.00 - 5%
//de R$ 1100.01 a R$ 2500.00 - 10%
//maior que R$2500.00 - 15%

function calculaDesconto(salario){
    if (salario <= 1100){
        return salario - (salario * 0.05);
    }else if( salario >= 1100.01 && salario <=2500){
        return salario - (salario * 0.10);
    }else{
        return salario - (salario * 0.15);
    }

}
const desconto = salario - calculaDesconto(salario)
const salarioLiquido = salario - desconto + beneficio;

print(`O salário Bruto é de R$ ${salario.toFixed(2)} com desconto de R$ ${desconto.toFixed(2)} receberá um valor liquido de R$ ${salarioLiquido.toFixed(2)}
    + benefício sociais de R$ ${beneficio.toFixed(2)}.`);
