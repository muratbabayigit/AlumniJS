//Nested If Else Statement

/*
Soru:
Kullanıcın girdiği sayının negatif/pozitif ve çift/tek sayı olduğunu yazdırın
        Girilen sayı pozitif çift sayıdır
*/

let sayi=-153;

if (sayi>0){
    if(sayi%2===0){
        console.log("Girilen sayı pozitif çift sayıdır");
    }else{
        console.log('Girilen sayı pozitif tek sayıdır')
    }

}else if(sayi<0){
    if(sayi%2===0){
        console.log('Girilen sayı negatif çift sayıdır');
    }else{
        console.log('Girilen sayı negatif tek sayıdır');
    }


}else{
    console.log('Girilen sayı sıfırdır.');
}