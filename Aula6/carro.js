//Criar um modulo que exporte uma função como classe
//A classe terá os atributos como marca, ano e modelo
// a classe tera um metodo verificaAno que recebe o ano de fabricacao
//se o ano for maior que 2000, mostrar a marca do veiculo
//se o ano for menor que 2000, mostrar o modelo do veiculo

module.exports = function (marca, ano, modelo) {
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;

    this.verificaAno = function () {
        if (ano > 2000)
            console.log("A marca é: " + marca)
        else
            console.log("O modelo é: " + modelo)

    }
}