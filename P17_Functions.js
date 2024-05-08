//Parametresiz Fonksiyonlar


function sayHello(){
    console.log("Herkese Merhaba!");
}

//Fonksiyon çağırma

sayHello();


//Parametreli fonskiyon

function great(name){
    console.log('Merhaba '+name+'!');
}

great('Murat')


function toplam(a,b){
    return a+b;
}

let sonuc=toplam(3,5);
console.log(sonuc);


console.log(toplam(12,18))

var multiply=function(x,y){
    return x*y
}

console.log('x*y = '+multiply(3,9))



//Arrow Function (ES6 versiyonunda sonraki kısımda geçerlidir)

const square=(num)=>{
    return num*num;
}

//daha kısa syntax
const cube=num=>num**3;

console.log(square(5)); //25
console.log(cube(3)); //27



