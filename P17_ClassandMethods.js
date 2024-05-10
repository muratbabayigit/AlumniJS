// Basit bir sınıf tanımı
class Person {
    // Kurucu (constructor) metodu
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Metodlar
    greet() {
      return `Merhaba, ben ${this.name}!`;
    }
  
    getAge() {
      return `${this.name} ${this.age} yaşında.`;
    }
  }
  
  // Sınıfın örneği (instance) oluşturma
  const person1 = new Person('Ahmet', 30);
  console.log(person1.greet()); // Merhaba, ben Ahmet!
  console.log(person1.getAge()); // Ahmet 30 yaşında.
  