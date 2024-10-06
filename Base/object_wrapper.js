
console.log("Cria variável - var s = 'test';");
console.log("Cria propriedade na variável - s.len = 4;");
console.log("Consulta propriedade da variável - var t = s.len;");
var s = 'test';
s.len = 4;
var t = s.len;
console.log();
console.log("imprime t");
console.log(t);

console.log("A definição de uma propriedade é ignorada. A alteração é feita em um objeto temporário.");

console.log("Wrappers estão presentes em strings, booleanos ou numericos...");
console.log("Por exemplo var texto = 'este eh um texto'");
console.log("Por exemplo var tamanho = texto.length");
console.log("imprime tamanho");
console.log("");

var texto = 'este eh um texto';
var tamanho = texto.length;
console.log(texto);
console.log(tamanho);

console.log("Neste caso existem objetos wrapper que são usados em Strings, booleanos e numbers que possuem os métodos que são carregados nesses casos.");