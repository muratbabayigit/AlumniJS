//javascriptte 5 farklı data türü vardır
/*
1-String : Metinsel
2-Numbers :Sayısal
3-Boolean : Mantıksal (true/false)
4-Null: Boş
5-undefined: Tanımlanmamış
*/

//String
let name1="Esra";
var name2='Ayça';

console.log(typeof name2)

//Number
let age=18  //numbers
let height=155.7; //Numbers
let number='25'; //Bu drumda 25 string olacaktır. bu nedenle matematiksel işlemlerde kullanılamaz

console.log(typeof age)   //typeof komutu değişkenin türünü yazdırır.
console.log(typeof number)


//Boolean

let isHeRetired=false;

console.log(isHeRetired)
console.log(typeof isHeRetired);


//Null

let studentNumber=null;

console.log(studentNumber)
console.log(typeof studentNumber)

//undefined

let studentId=undefined;

console.log(studentId);
console.log(typeof studentId);


studentId=97;
console.log(studentId);
console.log(typeof studentId);

studentNumber=9720016;

console.log(studentNumber)
console.log(typeof studentNumber)


let firstName="Murat"; //String 
var lastName="Yiğit"; //String
let myAge=44; //numbers
const idNumber=23654; // Değiştirelemez Data Tipidir

console.log("Adı: "+firstName+'\nSoyadı: '+lastName+'\nYaşı: '+myAge+'\nTCKN: '+idNumber)
