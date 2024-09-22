console.log("Valores booleanos em Javascript\n\n");

console.log("Valores booleanos são: 1 ou 0, verdadeiro ou falso, ligado ou desligado.");
console.log("Em javascript as palavras true e false representam os dois valores possíveis de booleano.");
console.log("Existem alguns valores que são convertidos ou considerados como um booleano falso. São eles:\n");
console.log("undefined");
console.log("null");
console.log("0");
console.log("-0");
console.log("NaN");
console.log("String vazia \"\"");

console.log("\n");
console.log("Qualquer outro valor é considerado booleano verdadeiro.");

console.log("Observe:\n");

console.log("A seguinte estrutura será usada para avaliação:");
console.log("Recebe o valor. Se é booleano falso imprime: FALSO. Se for verdadeiro imprime VERDADEIRO");
console.log("var avalia = false");
var avalia = false;

if(avalia){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}

console.log("avalia = true");
avalia = true;

if(avalia){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}

console.log("avalia = null");
avalia = null;

if(avalia){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}


console.log("avalia = \"\"");
avalia = "";

if(avalia){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}