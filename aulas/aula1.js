// declarar uma variavel constante das nostas do aluno
const nota = [];

// inserindo as notas
nota.push(10);
nota.push(5);
nota.push(7);
nota.push(10);

// print da variavel nota
console.log("Notas: ", nota);

// declarar variavel de soma
let soma = 0;
// contar as notas da lista com o FOR
for(let i = 0; i < nota.length; i++){
    soma += nota[i];
}
// declaro uma variavel media
const media = soma / nota.length;
// print media das notas do aluno
console.log("Média: ", media)

