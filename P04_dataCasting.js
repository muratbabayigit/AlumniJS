/*
Data Casting(veri dönüştürme) işleminde 
bir veri türünün başka bir veri türüne dönüştürme işlemidir.
Bu işlem genllikle data'ları kullanım senaryosuna uygun hale getirmek için yapılır.
*/

//String'den Number'a
let str='123';
let num=Number(str);
console.log (str)
console.log('typeof str: '+typeof str)
console.log(num)
console.log('typeof num: '+typeof num)

console.log('------------------------------------------------')

//Number to String
let str2=String(num);
console.log (str2)
console.log('typeof str2: '+typeof str2)

//String to Boolean
let str3='true';
let bool1=Boolean(str3)
console.log (bool1)
console.log('typeof str: '+typeof bool1)


//Number to Boolean
let num1=215;
let bool2=Boolean(num1);

console.log(bool2); 
//javascript'te bir sayının değeri sıfır veya not a number(NaN) ise boolean'a cast edilirse false döndürür
// Eğer sıfırdan farkı bir sayı atanırsa  bu sefer bize true döndürür.



//Boolean to Number
let bool3=false;
let num2=Number(bool3);
console.log(num2); //true ise 1 false ise 0 döndürür
