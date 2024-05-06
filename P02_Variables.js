//Javascriptte 3 farklı variable danımlanır
/*
let ve var ile oluşturulan variable'lara atanan değerler değiştirilebilir özelliktedir
const ile oluşturulan variable'lara atanan değer değiştirilemez
*/

let firstName="Murat"; //String 
var lastName="Yiğit"; //String
let age=44; //numbers
const idNumber=23654; // Değiştirelemez Data Tipidir


console.log("Adı: "+firstName);
console.log('Soyadı: '+lastName);
console.log('Yaşı: '+age)
console.log('TCKN: '+idNumber)
// console.log('Okulu:'+schoolName) kendisinden önce schoolName tanımlanmadığı için yazdırmaz

console.log('----------------------')

firstName='Tarık';
age=18;
const schoolName='Uludag';// Değiştirelemez Data Tipidir

console.log("Adı: "+firstName);
console.log('Soyadı: '+lastName);
console.log('Yaşı: '+age)
console.log('TCKN: '+idNumber)
console.log('Okulu:'+schoolName)



