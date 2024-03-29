# Variáveis 
## Declaração de Variáveis

Para usar variáveis em JavaScript, primeiro precisamos criá-la, ou seja, ***declarar uma variável***.  Para delcarar variáveis, usamos uma das seguintes palavras-chave: 

* **var:**
* **let**
* **const**

>  Quando usar var, let, ou const? 
> * Sempre declare variáveis 
> * Sempre use **const** se o valor não precisar ser alterado 
> * Sempre use **const** se o valor **não** deve ser alterado 
> * Use **let** apenas se não puder usar const
> * Use **var** apenas se você **deve** oferecer suporte a navegadores antigos.
<br> 

`Hoisting` 

O Hoisting é o comportamento do JavaScript de mover as declarações de variáveis para o topo do seu escopo antes da execução do código.
Isso significa que você pode usar uma variável antes de declará-la.
Exemplo:
javascript

```javascript
console.log(x); // Output: undefined
var x = 5;
```

### VAR 
Variáveis declaradas com var têm escopo de função ou escopo global. Elas permitem redeclaração e reatribuição de valores. Além disso, podem ser usadas antes de serem declaradas.

```javascript 
var x = 10;

function example() {
    var y = 20;
    console.log(x); // Output: 10 
    console.log(y); // Output: 20
}

console.log(x); // Output: 10 
console.log(y); // Output: ReferenceError: y is not defined
```

### CONST 
Constantes declaradas com const também têm escopo de bloco. Devem ser inicializadas no momento da declaração e não podem ser reatribuídas. Além disso, não permitem redeclaração.

```javascript
const PI = 3.14;
console.log(PI); // Output: 3.14 

PI = 3.14159; // Output: TypeError
``` 

### LET 
Variáveis declaradas com let têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco em que são declaradas. Elas não permitem redeclaração de variáveis no mesmo escopo, mas permitem reatribuição de valores. Além disso, não são içadas.

```javascript
let x = 10;

if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}

console.log(x); // Output: 10
console.log(y); // Output: ReferenceError: y is not defined
```
<br>

## Escopo

Em JavaScript, escopo refere-se à visibilidade de uma variável ou como ela pode ser usada após ser declarada.

O escopo de uma variável depende do local onde foi declarada e da palavra-chave usada (let, var, const).

Os três tipos de escopo são:

- escopo global
- escopo de função
- escopo de bloco.

### Global 
O escopo global é o escopo mais amplo em JavaScript. As variáveis declaradas fora de qualquer função ou bloco de código têm escopo global e podem ser acessadas de qualquer lugar no código.


```javascript
var globalVariable = 10;

function exampleFunction() {
    console.log(globalVariable); // Acesso à variável global
}

exampleFunction(); // Saída: 10
```

### Bloco 
O escopo de bloco foi introduzido no ES6 (ECMAScript 2015) e refere-se ao escopo dentro de um bloco delimitado por chaves, como em *loops for e if*. Variáveis declaradas com `let` e `const` têm escopo de bloco e só podem ser acessadas dentro desse bloco.
Este tipo de escopo ajuda a evitar vazamentos de variáveis e a manter o código mais seguro.

```javascript
if (true) {
    let blockVariable = 30;
    console.log(blockVariable); // Acesso à variável de bloco
}

console.log(blockVariable); // Erro: blockVariable is not defined
```

### Função
O escopo de função refere-se ao escopo dentro de uma função. As variáveis declaradas dentro de uma função só podem ser acessadas dentro dessa função, a menos que sejam declaradas globalmente.

```javascript
function exampleFunction() {
    var localVariable = 20;
    console.log(localVariable); // Acesso à variável local
}

exampleFunction(); // Saída: 20
console.log(localVariable); // Erro: localVariable is not defined
```

---

# Tipos de Dados

## Objeto ... 
## Array  ... 

## Tipos  Primitivos

### Boolean
O tipo de dados bool governa os valores mais primitivos, True ou False (1 ou 0), usado para verificações simples ou condições.

```javascript
let bool = true;
while (bool) {
  console.log("O while é igual a True");
}
```

### Number
Regimenta o grupo real dos números.

```javascript
255;
255.0; // Mesmo Número
255 === 255.0; // true
255 === 0xff; // true (Hexadecimal)
255 === 0b11111111; // true (Binário)
```

### String
Dirige uma cadeia de caracteres.

```javascript
let str = "Isso é uma cadeia de caracteres";
let strn = "1sso tamb3m 3 um4 c4d3i4 d3 c4r4ct3r3s";
```

### Undefined
Indica uma situação de indefinição. Retornado por uma variável que não teve um valor atribuído ou por uma função quando nenhum valor é retornado explicitamente.

```javascript
var x;
if (x === undefined) {
  // será executado
} else {
  // não é executado
}
```

### Null
Sanciona um valor nulo.

```javascript
let nulo = null;
console.log(nulo * 12); // Output 0
```
<br>

---
# Operadores básicos 

## Aritiméticos
## De comparação
## Lógicos 
## Typeof