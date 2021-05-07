// SERVIDOR

//var http = require("http")

// http.createServer(function (req, resp) {

//     //criar o cabeçalho html
//     resp.writeHead(200, { "Conten-Type": "text/plain" })
//     resp.write("Olá Mundo!!!");
//     resp.end();
// }).listen(3000)

// var meumodulo = require("./log.js")
// meumodulo.info();
// meumodulo.erro();


var meumodulo = require("./bisteca.js")
meumodulo.mensagem("deseja uma bisteca?")