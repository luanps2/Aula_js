var operacao = require('./matematica.js'); //variavel
var par = require('./paridade.js'); //função
var carro = require('./carro.js'); //classe

var c1 = new carro('Toyota,', 2019, 'Yaris'); //instanciei um objeto
c1.verificaAno();

res = operacao.soma(5,6)
console.log("O resultado da sioma é: " + res)

par(res);