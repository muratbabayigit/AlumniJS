class person{
    constructor(fullName,age){
        this.fullName=fullName
        this.age=age
   
    }

    great(){
        return `Merhaba! Ben ${this.fullName}.`
    }
    getAge(){
        return `Ben ${this.age} yaşındayım`
    }

   
}

//Bu class'tan bir obje oluşturma ve öğlere ulaşma(instance)
const person1=new person('Ahmet',30)

console.log(person1.great());
console.log(person1.getAge());




