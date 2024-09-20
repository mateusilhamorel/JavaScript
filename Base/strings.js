console.log("Sequencia de escape de caracteres especiais: ");
console.log("\\0 - caractere NULL");
console.log("\0");
console.log("\\b - retrocesso ");
console.log("\\t - tabulação horizontal ");
console.log("\tUsando tabulção horizontal.");
console.log("\\n - nova linha.");
console.log("\nImprime uma nova linha antes desse texto.");
console.log("\\v - Tabulação vertical.");
console.log("\v Usando tabulação vertical antes deste texto.");
console.log("\\f - Avaço de página.");
console.log("\f Usando avanço de página.");
console.log("\\r - Retorno de carro.");
console.log('\\" - Usar aspas duplas');
console.log("\" Este é um texto com aspas. \"");
console.log("\\ - Usar contrabarra.");
console.log("\\Usando a contrabarra.");
console.log("\' - Usar o apóstrofo no texto.");
console.log('\'Usando apostrofos\'.');

console.log("\n\nTRABALHAR COM STRINGS:\n\n");

console.log("var texto = \"Hello\";");
console.log("var texto2 = \"World\";");
console.log("var texto3 = \"again.\";");

var texto = "Hello";
var texto2 = "World";
var texto3 = "again.";

var texto4 = texto+" "+texto2+" "+texto3;
console.log("var texto4 = texto+\" \"+texto2+\" \"+texto3;");
console.log(texto4);

console.log("Pegar um caractere específico do texto: texto4.charAt(6)");
console.log(texto4.charAt(6));

console.log("Numero de caracteres de um texto: texto4.length");
console.log(texto4.length);

console.log("Pegar parte de uma string: texto4.substring(6,11)");
console.log(texto4.substring(6,11));

console.log("Pegar prieira posição da letra: texto4.indexOf(\"W\")");
console.log(texto4.indexOf("W"));

console.log("Pegar ultima posição da letra: texto4.lastIndexOf(\"o\")");
console.log(texto4.lastIndexOf("o"));

var texto5 = texto+","+texto2+","+texto3;
console.log("var texto4 = texto+\",\"+texto2+\",\"+texto3;");
console.log(texto5);

console.log("Cria um vetor com texto separado pelo separador usado: s = texto5.split(\",\")");
s = texto5.split(",");
console.log("\n");
console.log("s[0]: "+s[0]);
console.log("\n");
console.log("s[1]: "+s[1]);
console.log("\n");
console.log("s[2]: "+s[2]);
console.log("\n");


console.log("relembrando o que tem no texto2 ");
console.log(texto2);

console.log("Troca um caractere: texto2.replace(\"W\",\"Z\") ");
console.log(texto2.replace("W","Z"));

console.log("Coloca tudo em maiúsculas: texto2.toUpperCase() ");
console.log(texto2.toUpperCase());



