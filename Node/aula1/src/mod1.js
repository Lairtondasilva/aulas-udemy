
const nome = "Lairton";
const sobrenome = "da Silva"

function falaNome (){
    return nome + " "+sobrenome;
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
this.falaNome = falaNome;