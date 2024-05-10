// JavaScript Temel Ders Notları: Nesneler (Objects) ve Nesne Yöntemleri

// Nesneler, anahtar-değer çiftlerini depolayan karmaşık veri yapılardır.

// 1. Nesnelerin Oluşturulması:

// Nesneler, süslü parantezler {} kullanılarak oluşturulur.
let ogrenci = {
    ad: "Ahmet",
    yas: 25,
    bolum: "Bilgisayar Mühendisliği"
};

// 2. Nesnelerin Erişimi:

// Nesnelerdeki bir özelliğe erişmek için nokta (.) veya köşeli parantez [] notasyonu kullanılır.
console.log(ogrenci.ad); // "Ahmet"
console.log(ogrenci["yas"]); // 25

// 3. Nesne Yöntemleri:

// a. Object.keys(): Bir nesnedeki tüm anahtarları içeren bir dizi döndürür.
let anahtarlar = Object.keys(ogrenci);
console.log(anahtarlar); // ["ad", "yas", "bolum"]

// b. Object.values(): Bir nesnedeki tüm değerleri içeren bir dizi döndürür.
let degerler = Object.values(ogrenci);
console.log(degerler); // ["Ahmet", 25, "Bilgisayar Mühendisliği"]

// c. Object.entries(): Bir nesnenin anahtar-değer çiftlerini içeren bir dizi döndürür.
let ciftler = Object.entries(ogrenci);
console.log(ciftler); // [["ad", "Ahmet"], ["yas", 25], ["bolum", "Bilgisayar Mühendisliği"]]

// d. hasOwnProperty(): Bir nesnenin belirli bir özelliğe sahip olup olmadığını kontrol eder.
if (ogrenci.hasOwnProperty("yas")) {
    console.log("Öğrencinin yaş özelliği bulunuyor.");
} else {
    console.log("Öğrencinin yaş özelliği bulunmuyor.");
}

// e. delete: Bir nesnedeki belirli bir özelliği siler.
delete ogrenci.bolum;
console.log(ogrenci); // { ad: "Ahmet", yas: 25 }
