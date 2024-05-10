// Örnek 1: Kullanıcıdan alınan bir sayının pozitif mi,
// negatif mi yoksa sıfır mı olduğunu kontrol ederek, 
//aynı zamanda bu sayının çift mi tek mi olduğunu 
//belirlemek için nested If Else ifadeleri kullanma:

let sayi1 = 457;

if (sayi1 > 0) {
    if (sayi1 % 2 === 0) {
        console.log("Girilen sayı pozitif ve çift.");
    } else {
        console.log("Girilen sayı pozitif ve tek.");
    }
} else if (sayi1 < 0) {
    if (sayi1 % 2 === 0) {
        console.log("Girilen sayı negatif ve çift.");
    } else {
        console.log("Girilen sayı negatif ve tek.");
    }
} else {
    console.log("Girilen sayı sıfır.");
}

// Örnek 2: Kullanıcıdan bir ürünün fiyatını ve indirim oranını alarak,
// indirimli fiyatı hesaplayan bir program yazma. 
//Ancak indirim oranı 0 ile 100 arasında olmalıdır, 
//aksi halde geçersiz bir indirim oranı olduğunu belirtmeliyiz.

let fiyat = 200;
let indirimOrani = 15;

if (indirimOrani >= 0 && indirimOrani <= 100) {
    let indirimMiktari = (fiyat * indirimOrani) / 100;
    let indirimliFiyat = fiyat - indirimMiktari;
    console.log("İndirimli fiyat: " + indirimliFiyat.toFixed(2));
} else {
    console.log("Geçersiz indirim oranı. Lütfen 0 ile 100 arasında bir değer girin.");
}
