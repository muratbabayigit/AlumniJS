//Atama Opertorü
// = yazılınca bı operator eşitlik olayına bakmaz. Sadece x için 158 değerini atamak için kullanılır
let x=185;


//Mantıksal Operator
let a=5;
let b='5';

console.log('a nın data türü: '+typeof a);
console.log('b nin data türü: '+typeof b);

//Eşitlik Operatörü ==
console.log(a==b); //== sadece değer kontrolü yapar.Data tipine bakmaz -true


//Mutlak Eşitlik Operatörü ===
console.log(a===b); //=== değer ve data tipi kontrolü yapar -false


let c=12;
let d=28;
let e=12;
let f='12';

console.log(c<d) //true
console.log(e>=c); //true
console.log(e>d); //false

//Eşit Değil Operatörü

console.log(c!=d); //true
console.log('--------------------------')
console.log(c!=e); //false
console.log(c!==e); //false
console.log('--------------------------')
console.log(c!=f); //false - data tipine bakmadan değerler eşit mi diye bakar
console.log(c!==f); //true  - değerler aynı olsa bile data tipi farklıysa eşit değildir der

