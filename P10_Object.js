let ogrenci1={
        ad: "Ahmet",
        soyad:"Bulut",
        numara:712,
        sınıf:'9A'
}

let ogrenci2={
    ad:'Esma',
    soyad: "Yiğit",
    numara:886,
    sınıf:"9A"
}
//Nesnele Erişim
console.log(ogrenci1.ad);
console.log(ogrenci1.soyad);
console.log(ogrenci1.numara)
console.log(ogrenci1.sınıf)

//Neselerin tamamına toplu halde erişmek 
console.log("--------------------------------")

//Object.values ile objenin değerlerine ulaşıyoruz
console.log(Object.values(ogrenci2)) 

//Object.keys ile objenin keylerine ulaşıyoruz
console.log(Object.keys(ogrenci1)) 

//Object.entries ile objenin key:value ikilisine aynı anda ulaşıyoruz
console.log(Object.entries(ogrenci2)) 

//delete ile objenin herhangi bir özelliğini siliyoruz
delete ogrenci1.sınıf; 
console.log(Object.values(ogrenci2)); // 


//hasOwnproperty ile obje içinde bir özellik var mı onu kontrol ediyoruz
console.log(ogrenci2.hasOwnProperty("sınıf")) 

