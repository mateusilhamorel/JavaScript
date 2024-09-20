console.log("var data1 = new Date(2024, 0 , 1)");
console.log("Gera em data1 o primeiro dia do primeiro mes de 2024");

var data1 = new Date(2024, 0 , 1);

console.log(data1);
console.log("\n");

console.log("var data2 = new Date(2024, 0 , 1, 17, 10, 30)");
console.log("Gera em data2 o primeiro dia do primeiro mes de 2024 na hora 05:10:30 da tarde");

var data2 = new Date(2024, 0 , 1, 17, 10, 30);

console.log(data2);
console.log("\n");

console.log("var data3 = new Date()");
console.log("Gera em data3 a hora e data atuais do sistema.");

var data3 = new Date();

console.log(data3);
console.log("\n");

console.log("Para obter o tempo passado basta subtrair uma variável da outra:");
console.log("var elapsed = data3 - data2.");
console.log("a resposta é dada em milissegundos.");

var elapsed = data3 - data2

console.log(elapsed);
console.log("\n");


console.log("Com uma variável construída com o Date() é possível usar métodos da classe Date() para obter detalhes:");
console.log("Usando a data2");
console.log("data2.getFullYear()");
console.log("data2.getMonth()");
console.log("data2.getDay()");
console.log("data2.getHours()");
console.log("data2.toString()");
console.log("data2.toLocaleDateString()");
console.log("data2.toLocaleTimeString()");
console.log("\n");
console.log(data2.getFullYear());
console.log(data2.getMonth());
console.log(data2.getDay());
console.log(data2.getHours());
console.log(data2.toString());
console.log(data2.toLocaleDateString());
console.log(data2.toLocaleTimeString());

