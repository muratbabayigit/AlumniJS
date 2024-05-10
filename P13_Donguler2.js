// 1. for Döngüsü Örnekleri:

// Örnek 1: 1'den 10'a kadar olan sayıları ekrana yazdırma
console.log("1'den 10'a kadar olan sayılar:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Örnek 2:  bir sayının faktöriyelini hesaplama
const sayi = 7
let faktoriyel = 1;
for (let i = 1; i <= sayi; i++) {
    faktoriyel *= i;
}
console.log(`${sayi}! = ${faktoriyel}`);


// 2. while Döngüsü Örnekleri:

// Örnek 1: 1'den 10'a kadar olan tek sayıları ekrana yazdırma
console.log("\n1'den 10'a kadar olan tek sayılar:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j += 2; // Tek sayıları yazdırmak için 2'şer artırıyoruz.
}

// Örnek 2: bir sayının çift olup olmadığını kontrol etme
let girilenSayi = 34;
while (isNaN(girilenSayi)) {
    console.log("Geçersiz giriş. Lütfen bir sayı girin.");
    girilenSayi = parseInt(prompt("Bir sayı girin: "));
}
if (girilenSayi % 2 === 0) {
    console.log(`${girilenSayi} bir çift sayıdır.`);
} else {
    console.log(`${girilenSayi} bir tek sayıdır.`);
}
