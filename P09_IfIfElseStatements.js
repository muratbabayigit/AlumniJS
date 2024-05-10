// Sadece If İfadeleri

// Örnek 1: Kullanıcıdan alınan bir sayının pozitif mi negatif mi olduğunu kontrol etmek için:
let sayi1 = 34;

if (sayi1 > 0) {
    console.log("Girilen sayı pozitif.");
}
if (sayi1 < 0) {
    console.log("Girilen sayı negatif.");
}

// Örnek 2: Bir kullanıcının yaşını kontrol ederek, 18 yaşından büyükse bir eylem gerçekleştirmek için:
let yas = 44;

if (yas >= 18) {
    console.log("Eylem gerçekleştirilebilir.");
}
if (yas < 18) {
    console.log("Eylem gerçekleştirilemez.");
}

// Örnek 3: Bir kullanıcının girdiği bir sayının tek mi çift mi olduğunu kontrol etmek için:
let sayi2 = 18;

if (sayi2 % 2 === 0) {
    console.log("Girilen sayı çift.");
}
if (sayi2 % 2 !== 0) {
    console.log("Girilen sayı tek.");
}


// If Else İfadeleri

// Örnek 1: Kullanıcıdan alınan bir sayının pozitif mi negatif mi olduğunu kontrol etmek için:
let sayi3 = 34;

if (sayi3 > 0) {
    console.log("Girilen sayı pozitif.");
} else {
    console.log("Girilen sayı negatif veya sıfır.");
}

// Örnek 2: Bir kullanıcının yaşını kontrol ederek, 18 yaşından büyükse bir eylem gerçekleştirmek için:
let yas2 = 45;

if (yas2 >= 18) {
    console.log("Eylem gerçekleştirilebilir.");
} else {
    console.log("Eylem gerçekleştirilemez.");
}

// Örnek 3: Bir kullanıcının girdiği bir sayının pozitif, negatif veya sıfır olduğunu kontrol etmek için:
let sayi4 = 19;

if (sayi4 > 0) {
    console.log("Girilen sayı pozitif.");
} else if (sayi4 < 0) {
    console.log("Girilen sayı negatif.");
} else {
    console.log("Girilen sayı sıfır.");
}
