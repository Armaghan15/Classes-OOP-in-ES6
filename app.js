// Part 1: Simple Classes Example in Es6

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   isAngry() {
//     return `Shut up FAM, Mi name is ${this.firstName} and Mi face looks angry`;
//   }
// }

// const Armaghan = new Person("Armaghan", "Hayat");

// Part 2: Inheritance and extending in Es6 classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hey MI name is ${this.firstName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, email) {
    super(firstName, lastName);

    this.phone = phone;
    this.email = email;
  }
}

const John = new Customer(
  "John",
  "Cena",
  "555-333-222",
  "john.drama@gmail.com"
);


console.log(John);
console.log(John.greeting());
// Got Problems? Sit, focus and remove the problems instead of destroying yourself by procrastinating, YouTube and Instagram
