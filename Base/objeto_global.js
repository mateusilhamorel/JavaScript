
var global = this;
console.log("var global = this;");
console.log(global);
console.log();

var s = "teste de variável";
console.log("var s = 'teste de variável';");
console.log(global);

const x = "outro teste de variável";
console.log("const x = 'outro teste de variável';");
console.log(global);

let y = 32;
console.log("let y = 32;");
console.log(global);


global.myNumber; // Declaration of the global variable - undefined
global.myNumber = 5; // Global variable initialized to value 5. 
console.log("global.myNumber;");
console.log("global.myNumber = 5;");
console.log(global);