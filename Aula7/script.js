var express = require('express')
var path = require('path')


var app = express();

app.set('view engine', 'jade')

app.get('/', function (req, res) {
    res.render('index',
        {
            titulo: 'Minha pagina',
            cabecalho: 'Olá Mundo',
            parA: 'isso é uma frase',
            parB: 'esse é uma outra frase'
        }
    )
})

app.get('/home', (req, res) => {
    // res.send("Olá, bem vindo home!");
    res.sendFile(path.join(__dirname + '/home.html'))
});

app.get('/login', (req, res) => {
    res.send("Olá, bem vindo ao login!");
})

app.get('/logout', (req, res) => {
    res.send("Olá, bem vindo ao logout!")
})

app.listen(process.env.port || 3000);
console.log("Web server em execução.")