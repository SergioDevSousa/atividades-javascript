
const pessoa = {
    nome: "Renan",
    idade: 30,
    falar: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e moro em ${this.cidade}`);
    }
    
}
pessoa.cidade = "João Pessoa";

const y = pessoa.falar;
pessoa.falar();