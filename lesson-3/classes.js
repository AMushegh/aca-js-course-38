// գրեք Book կլասս, որի էկզեմպլյառները կունենան author և title property-ներ, ու getTitle ու getAuthor մեթոդները,
// որոնք կվերադարձնեն author և title property-ները այս տեսքով ՝ 'Title: ....', 'Author: ...': Օրինակ՝
//
// Harry Potter գիրքը ստեղծենք HP անունով
//

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }
}

// 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(person) {
    let message = "is older than";
    if (this.age === person.age) {
      message = "is the same age as";
    }
    if (this.age < person.age) {
      message = "is younger than";
    }

    console.log(`${this.name} ${message} ${person.name}`);
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

// calculator
class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
}

let calc = new Calculator();
console.log(calc.add(2, 3));
