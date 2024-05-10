// JavaScript Temel Ders Notları: Fonksiyonlar

// 1. Fonksiyon Nedir?
// Fonksiyonlar, belirli bir işlevi gerçekleştirmek için kullanılan 
// bloklar halinde kod parçalarıdır. 
// Yeniden kullanılabilir ve modüler kod yazmamızı sağlarlar.

// 2. Fonksiyonların Oluşturulması:
// Fonksiyonlar "function" anahtar kelimesiyle tanımlanır.
// Genel sözdizimi:
// function functionName(param1, param2, ...) {
//     // Fonksiyonun işlevi
// }

function selam() {
    console.log("Merhaba!");
}

// 3. Fonksiyonların Çağrılması:
// Tanımlanan fonksiyonlar, gerektiğinde çağrılarak kullanılır.
// Fonksiyonun adı ve parantezler içinde gerekli parametreler belirtilir.
selam(); // "Merhaba!" çıktısını verecektir.

// 4. Parametreler:
// Fonksiyonlar, gerektiğinde bir veya daha fazla parametre alabilir.
// Parametreler, fonksiyonun içinde kullanılmak üzere fonksiyonun tanımı sırasında belirlenir.
// Çağrıldığında, bu parametreler fonksiyona geçirilen değerlerle eşleşir.
function toplama(a, b) {
    console.log(a + b);
}

toplama(5, 3); // 8 çıktısını verecektir.

// 5. Dönüş Değeri:
// Fonksiyonlar, bir değer döndürebilirler. Döndürülen değer "return" anahtar kelimesiyle belirtilir.
// Döndürülen değer, fonksiyonun çağrıldığı yere gönderilir.
function kareAl(x) {
    return x * x;
}

let sonuc = kareAl(4);
console.log(sonuc); // 16 çıktısını verecektir.

// 6. Fonksiyon Yöntemleri:
// a. call(): Bir fonksiyonu belirli bir bağlamda (this değeri) çalıştırır.
function selam() {
    console.log("Merhaba, " + this.ad);
}

let kisi = {
    ad: "Ahmet"
};

selam.call(kisi); // Merhaba, Ahmet

/*
this anahtar kelimesi, bir JavaScript fonksiyonunun çağrıldığı bağlamı (context) temsil eder. 
Bağlam, bir fonksiyonun nasıl çağrıldığına bağlı olarak değişir ve genellikle global nesne, 
bir nesne veya belirli bir bağlam olabilir.
this bağlamı, bir fonksiyonun içinde kullanıldığında,
o fonksiyonun çağrıldığı yerdeki bağlamı temsil eder.
Bu bağlam, call(), apply() veya bind() gibi yöntemlerle değiştirilebilir.
Örneğin, verdiğiniz kodda selam() fonksiyonu bir nesne içinde tanımlanmıştır (kisi nesnesi). 
Bu durumda, this anahtar kelimesi selam() fonksiyonunun çağrıldığı kisi nesnesini temsil eder. 
Yani, this.ad, kisi nesnesinin ad özelliğine erişir.
*/

// b. apply(): Bir fonksiyonu belirli bir bağlamda (this değeri) ve bir dizi parametre ile çalıştırır.
function carpma(x, y) {
    console.log(x * y);
}

carpma.apply(null, [5, 3]); // 15

// c. bind(): Bir fonksiyonun belirli bir bağlama (this değeri) bağlanmış bir kopyasını döndürür.
let carpmaIslemi = carpma.bind(null, 5);
carpmaIslemi(3); // 15