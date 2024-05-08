for (let i = 0; i < 10; i++) {
   if(i%2===0){
    console.log(i);
   }
    
}
console.log('******************************')
let sayi=0;
while(sayi<10){
   if(sayi%2===0){
    console.log(sayi);
   }
   sayi++
}

//Soru: Verilen sayının faktöryelini hesaplama
const sayi1=5
let faktoriyel=1;
for (let i=1; i<=sayi1; i++){
    faktoriyel*=i;
}
console.log(`${sayi1} sayısının faktöriyeli : ${faktoriyel}`);