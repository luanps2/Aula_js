var http = require('http');
var url  = require('url');

//criando um objeto do tipo servidor
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});

    var q = url.parse(req.url, true).query;
    // var txt = "Olá" + q.nome + " seja bem vindo";
    var txt = parseInt(q.n1) + parseInt(q.n2);

// res.write(req.url); //escreve uma reposposta para o cliente

res.end();
}).listen(4000);

// localhost:3000/aulanode
// localhost:3000/aulapoo
