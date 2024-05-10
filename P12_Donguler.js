// JavaScript Temel Ders Notları: for Döngüsü ve while Döngüsü

// 1. for Döngüsü:
// for döngüsü, belirli bir koşul sağlandığı sürece bir kod bloğunu yinelemek için kullanılır.
// Genel sözdizimi:
// for (başlangıç değeri; koşul; artırım/değişim) {
//     // Kod bloğu
// }

console.log("for Döngüsü Örneği:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Bu döngü, i değeri 0'dan başlayarak 4'e kadar (5 dahil değil) her adımda artırılarak çalışır.

// 2. while Döngüsü:
// while döngüsü, belirli bir koşul sağlandığı sürece bir kod bloğunu yinelemek için kullanılır.
// Genel sözdizimi:
// while (koşul) {
//     // Kod bloğu
// }

console.log("\nwhile Döngüsü Örneği:");
let sayac = 0;
while (sayac < 5) {
    console.log(sayac);
    sayac++;
}
// Bu döngü, sayac değeri 0'dan başlayarak 4'e kadar (5 dahil değil) her adımda artırılarak çalışır.
