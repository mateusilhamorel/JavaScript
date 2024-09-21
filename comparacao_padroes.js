console.log("Comparação de texto or ReGExp\n");

console.log("var text = \"testing: 1,2,3\"");
var text = "testing: 1,2,3";
console.log("var padrao = /\\d+/g - Todas as intancias de um ou mais digitos.");
var padrao = /\d+/g;

console.log("padrao.test(text) - verdadeiro pos existe correspondência.");
console.log(padrao.test(text));

console.log("text.search(padrao) - 9 é a primeira correspondencia.");
console.log(text.search(padrao));

console.log("s = text.match(padrao) - s[1 , 2 , 3].");
s = text.match(padrao);

console.log("s[0]: "+s[0]+"\n");
console.log("s[0]: "+s[1]+"\n");
console.log("s[0]: "+s[2]+"\n");

console.log("\n\nOutro exemplo: numeros = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
console.log("numPad = /[1-9]*/ - numeros de um dígito");

numeros = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
numPad = /([1-9]|10)/g;

console.log("n = numeros.match(numPad) .");
n = numeros.match(numPad);

console.log("n[3]: "+n[3]);
