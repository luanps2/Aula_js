// var nome = "X"

// function minhaFuncao() {

//     var nome = "Y";
//     document.write(nome);

// }

// function outraFuncao() {
//     document.write(nome)
// }

// function operadores() {

//     num = 4
//     num++
//     document.write(num)
//     num--
//     document.write(num)
// }

// function funcaoTres(){
// if(nome=="X")
// document.write("é o X");
// document.write("dsfd")

// }

// minhaFuncao()
// outraFuncao()
// operadores()

// function biabit(){
//     var a = 2
//     var b = 3

//     document.write("a & b ==>")
//     resulta = (a&&b)
//     document.write(resulta)
// }

// function condicionalternaria(){
// var a=10
// var b=20

// var quebra = "<br>"

// resultado = (a>b) ? 100:200
// document.write(resultado)
// document.write(quebra)

// }

//Objeto

var empregado = new Object()

//definindo o metodo construtor do meu objeto
function Livro(titulo, autor){
this.titulo = titulo
this.autor = autor

}

var livro = new Livro("Android", "Ricard")
document.write("Titulo: " + livro.titulo)
document.write("Autor: " + livro.autor)

