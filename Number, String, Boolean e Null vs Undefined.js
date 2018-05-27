/* --------- NUMBER --------- */
var nota = 10;

// Faz o exponencial da nota, no caso 10^2
nota.toExponencial(2); // Resultado 100

// transforma em float
nota.toFixed(2); // Resultado: 10.00

nota.toPrecision(1); // Resultado: 1e+1

nota.toString(); // Resultado: "10"

nota.valueOf(); // Resultado: 10

// Math API
// Similar ao Java
// Math.abs() - Valor absoluto do número
// Math.floor() - Valor inteiro do número
// Math.log() - Logarítmo natural do número (base E)
// Math.min() - Retorna o menor número
// Math.max() - Retorna o maior número
// Math.pow() - Potência do número
// Math.random() - Gera número randômico
// Math.round() - Arredonda o número para o interio mais próx
// Math.sin() - Seno do número
// Math.sqrt() - Raíz quadrada do número
// Math.tan() - Tangente do número

/* --------- STRING --------- */
// São imutáveis, nao modifica o original
// Exemplo:

// var nome = "Pedro Silva";
// nome.replace("Silva", "Medeiros");
// console.log(nome); Retornará "Pedro Silva", pois nao foi atribuido o replace

// Para atribuir deveríamos: 

// var nome = "Pedro Silva"
// nome = nome.replace("Silva", "Medeiros");
// console.log(nome); Agora retornará "Pedro Silva"

// Tanto faz aspas simples ou duplas

var nome = "AgileCode";

nome.charAt(2); // Retorna "i"
nome.charCodeAt(0); // retorna a letra na tabela unicode 65
nome.concat("!"); // retorna uma nova string "AgileCode!"
nome.indexOf('e'); // retorna o indice do primeiro 'e'
nome.replace('Code', '!'); // "Agile!"
nome.split('e'); // quebra na posicao e ['Agil','Cod', ""];
nome.substring(); // Extrai a parte da string desejada
nome.toLowerCase(); // Gera uma nova string em letras minúsculas
nome.toUpperCase(); // Gera uma nova string em letras maiusculas
nome.trim(); // Remove os espaços em branco, do início e do fim da string
nome.valueOf(); // Retorna o valor primitivo da String

var nomes = "Andre;Ana;Maria;Carol";
nomes.split(";"); // Retorna ['Andre', 'Ana', 'Maria', 'Carol']


/* --------- BOOLEAN --------- */
//
var isento = true;
var estudante = false;

isento.toString(); // "true"
estudante.valueOf(); // false

/* ---------------------------------- */
// UNICOS FALSOS

>!!0 // false

>!!NaN // false

>!!"" // string vazia - false

>!!null // false

>!!undefined // false

/* ------------- */
var pessoa = {}
>!!pessoa // true

var carros = []
>!!carros // true


/* ----- UNDEFINED VS NULL ----- */

// Undefined é retornado caso uma prop. de um determinado objeto seja consultada e nao exista. 
// Exemplo:
var pessoa = {};
pessoa.idade // undefined
// 

pessoa.nome = 'Andre';
pessoa.idade = 23;

for(var propriedade in pessoa) {
	console.log(propriedade); // Resposta: nome e idade
}

pessoa.idade = undefined; // Fazendo isso, a idade fica undefined mas a prop. idade continua no objeto
pessoa // Resposta: { nome: 'Andre', idade: undefined }

 // Null é a ausência do valor

 

