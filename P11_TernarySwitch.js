// Ternary İfadeleri Örneği:

// Örnek 1: Bir kullanıcının yaşını kontrol ederek, 18 yaşından büyükse "Eylem gerçekleştirilebilir." değilse "Eylem gerçekleştirilemez." mesajını gösteren bir program yazma.

let yas = parseInt(prompt("Yaşınızı girin: "));
let sonuc = (yas >= 18) ? "Eylem gerçekleştirilebilir." : "Eylem gerçekleştirilemez.";
console.log(sonuc);


// Switch İfadeleri Örneği:

// Örnek 2: Kullanıcının girdiği bir gün numarasına karşılık gelen gün adını gösteren bir program yazma.

let gun = 7;
let gunAdi;

switch (gun) {
    case 1:
        gunAdi = "Pazartesi";
        break;
    case 2:
        gunAdi = "Salı";
        break;
    case 3:
        gunAdi = "Çarşamba";
        break;
    case 4:
        gunAdi = "Perşembe";
        break;
    case 5:
        gunAdi = "Cuma";
        break;
    case 6:
        gunAdi = "Cumartesi";
        break;
    case 7:
        gunAdi = "Pazar";
        break;
    default:
        gunAdi = "Geçersiz gün numarası";
}

console.log("Girilen gün numarasına karşılık gelen gün: " + gunAdi);
