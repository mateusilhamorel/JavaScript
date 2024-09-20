console.log("Imprimindo 0");
console.log(0);
console.log("Imprimindo 3");
console.log(3);
console.log("Imprimindo 100000000");
console.log(100000000);
console.log("Imprimindo 0xCAFE911 (exa vai sair como decimal)");
console.log(0xCAFE911);

console.log("\n");

console.log("Imprimindo 3.1415");
console.log(3.1415);
console.log("Imprimindo 3.1415 / 876665324262345 (vai sair em notação exponencial)");
console.log(3.1415 / 876665324262345);

console.log("O problema do 0.1");
console.log("var x= 0.3 - 0.2");
console.log("var y= 0.2 - 0.1");
console.log("if(x == y){console.log(\"É igual\");");

var x= 0.3 - 0.2;
var y= 0.2 - 0.1;
if(x == y){
    console.log("É igual");
}else{
    console.log(x);
    console.log(y);
}

console.log("Para resolver o problema usar Math.round() ou .toFixed(<casas decimais>)");
console.log("const xAux= 0.3 - 0.2");
console.log("const yAux= 0.2 - 0.1");
console.log("var x2 = xAux.toFixed(1) ");
console.log("var y2 = yAux.toFixed(1)");
console.log("if(x2 == y2){console.log(\"É igual\");");

const xAux= 0.3 - 0.2;
const yAux= 0.2 - 0.1;
var x2 = xAux.toFixed(1);
var y2 = yAux.toFixed(1);
if(x2 == y2){
    console.log("É igual");
}else{
    console.log(x2);
    console.log(y2);
}
