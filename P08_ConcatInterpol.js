/*
concatenation ile iki dize birleştirilirken (+ operatörü),
interpolation ise backtick (``) karakteri ile çevrelenmiş bir dizenin içine
değişkenler veya ifadeler doğrudan yerleştirilir. 
Interpolation kullanırken ${}` ifadesi içinde değişkenler 
veya ifadeler bulunur ve JavaScript bu ifadeleri değerleri ile değiştirir.
*/

// Concatenation (Birleştirme)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName); // Output: John Doe

// Interpolation (Dizin İçi Yerleştirme)
let city = "New York";
let country = "USA";
let address = `I live in ${city}, ${country}`;
console.log("Interpolation:", address); // Output: I live in New York, USA



// Concatenation (Birleştirme) ile Sayı ve Dize Birleştirme
let age = 25;
let message = "I am " + age + " years old.";
console.log("Concatenation with Number and String:", message); // Çıktı: I am 25 years old.

// Interpolation (Dizin İçi Yerleştirme) ile Fonksiyon Çağrısı Alternatifi
let userName = "Alice";
let greetingMessage = `Hello, ${userName}!`;
console.log("Interpolation in Function Call Alternative:", greetingMessage); // Çıktı: Hello, Alice!


// Farklı Veri Türlerini Birleştirme
let num = 10;
let str = "20";
let result = num + str;
console.log("Concatenation of Different Data Types:", result); // Çıktı: 1020 (Sayı 10 ve dize "20" birleştirildi)