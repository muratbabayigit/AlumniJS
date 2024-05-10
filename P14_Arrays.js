// JavaScript Temel Ders Notları: Diziler ve Dizi Yöntemleri

// Diziler, birden çok öğeyi tek bir değişken altında saklamak için kullanılır.

// 1. Dizilerin Oluşturulması:

// Diziler köşeli parantezler [] kullanılarak oluşturulur.
let renkler = ["Kırmızı", "Yeşil", "Mavi"];

// 2. Dizilerin Erişimi:

// Dizilerdeki bir öğeye erişmek için indeks numarası kullanılır. İndeks numaraları 0'dan başlar.
console.log(renkler[0]); // "Kırmızı" çıktısını verecektir.

// 3. Dizi Yöntemleri:

// a. push(): Dizinin sonuna bir veya daha fazla öğe ekler.
renkler.push("Sarı");
console.log(renkler); // ["Kırmızı", "Yeşil", "Mavi", "Sarı"]

// b. pop(): Dizinin sonundaki öğeyi kaldırır ve bu öğeyi döndürür.
let sonRenk = renkler.pop();
console.log(sonRenk); // "Sarı"
console.log(renkler); // ["Kırmızı", "Yeşil", "Mavi"]

// c. shift(): Dizinin başındaki öğeyi kaldırır ve bu öğeyi döndürür.
let ilkRenk = renkler.shift();
console.log(ilkRenk); // "Kırmızı"
console.log(renkler); // ["Yeşil", "Mavi"]

// d. unshift(): Dizinin başına bir veya daha fazla öğe ekler.
renkler.unshift("Turuncu");
console.log(renkler); // ["Turuncu", "Yeşil", "Mavi"]

// e. splice(): Belirli bir indeksten başlayarak, belirli bir sayıda öğeyi kaldırır ve isteğe bağlı olarak yeni öğeler ekler.
renkler.splice(1, 0, "Mor", "Siyah");
console.log(renkler); // ["Turuncu", "Mor", "Siyah", "Yeşil", "Mavi"]

// f. slice(): Belirli bir dizinin belirli bir kısmını kopyalar.
let kopyaRenkler = renkler.slice(1, 4);
console.log(kopyaRenkler); // ["Mor", "Siyah", "Yeşil"]

// g. indexOf(): Bir öğenin dizideki ilk indeksini döndürür.
let indeks = renkler.indexOf("Mor");
console.log(indeks); // 1
