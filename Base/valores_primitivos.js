console.log("Valores primitovos são : ");
console.log("undefined");
console.log("null");
console.log("boolean");
console.log("number");
console.log("string");
console.log("");
console.log("Estes valores são imutáveis");
console.log("Você pode invocar os wrappers, mas não pode mudar os valores...");
console.log("");
console.log("var s = 'hello'");
console.log("imprime s.toUpperCase()");
console.log("imprime s");
console.log("");
var s = 'hello';
console.log(s.toUpperCase());
console.log(s);

console.log("");

console.log("OS valores primitivos pode ser comparados por seus valores.");
console.log("Objetos, por outro lado sao mutáveis");
console.log("Mesmo que dois objetos sejam declarados com valores/propriedades iguais, os objetos são referencias diferentes.");
console.log("Observe os vetores:");
console.log("");
console.log("var a = ['a', 'b', 'c']");
console.log("var b = ['a', 'b', 'c']");
console.log("imprime o teste a == b");
console.log("");

var a = ['a', 'b', 'c'];
var b = ['a', 'b', 'c']
console.log(a==b);

console.log("");


console.log("Agora, se o vetor d for uma referencia ao vetor a:");
console.log("var d = a");
console.log("o objeto será a mema referencia e o teste vai dar positivo");
console.log("imprime o teste a == d");
console.log("");

var d = a;
console.log(a == d);

console.log("");
console.log("Assim, para confirmar que dois objetos são iguais, é necessário testar todos os valores entre ambos.");
console.log("");
