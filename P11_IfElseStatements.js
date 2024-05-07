//11.Koşullu ifadeler

//11.1 Bağımsız koşullu ifadeler (If Statements)
let sayi=14;

if(sayi>10){console.log("Sayı 10'dan büyüktür");}
//Bağımsız if durumlarında sadece koşul doğrulanınca sonuç döner

// Soru: Kullanıcının yaşını sisteme girdiğimizde 18 yaşına eşit veya büyük ise
// Ehliyet başvurunuz kabul edildi uyarısını versin
// 18 yaşından küçük ise Ehliyet başvurunuz reddedildi. ... yıl sonra başvurmalısınız.

let age=17;

if(age>=18){console.log("Ehliyet başvurunuz kbul edildi");}
if(age<18){console.log("Ehliyet Başvurunuz reddedildi. "+(18-age)+' yıl sonra yeninden başvurunuz');}


if(age%2===0){console.log(age+" bir çift sayıdır");}


//11.2 If Else Statements
// Soru: Kullanıcının yaşını sisteme girdiğimizde 18 yaşına eşit büyük ise
// Ehliyet başvurunuz kabul edildi uyarısını versin
// 18 yaşından küçük ise Ehliyet başvurunuz reddedildi. ... yıl sonra başvurmalısınız.


let age2=17;
if(age2>=18){
    console.log('Ehliyet Başvurunuz Kabul Edildi!');
}else{
    console.log("Ehliyet Başvurunuz reddedildi. "+(18-age2)+' yıl sonra yeninden başvurunuz');
}


// Soru: Emeklilik Hesabı:
//       - Kadınlar 60 yaşında 
//       - Erkekler 65 yaşında emekli olabilir
// yaşını ve cinsiyetini siteme girdiğimiz kişiye e
// emekli yaşına gelmişse "Emekli Olabilirsiniz"
// emeklilik yaşına gememişse "Emekli Olabilmek için ... yıl daha çalışmalısınız"
// yazdıran javascrip kodunu yazınız.


