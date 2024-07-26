//----------Day-14[Classes]-------------//


//Activity-1[Class Definition]
//Task-1:Define a class Person with properties name and age, and a method to return a greeting message.Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const person = new Person('himanshu', 24);
  console.log(person.greet());

//Task-2:Add a method to the Person class that updates the age property and logs the update age.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  }
  
  const person2 = new Person('himanshu', 25);
  console.log(person2.greet());
  person.updateAge(31);
  

//Activity-2[Class Inheritance]
//Task-3:Define a class Student that extends the Person class.Add a property studentId and a method to return the student ID.Create an instance of the Student class and log the student ID.

class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  
  const student = new Student('himanshu', 20, 'S12345');
  console.log(student.getStudentId());
  

//Task-4:Override the greeting method in the Student class to include the student ID in the message.Log the overridden greeting message.

class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return this.studentId;
    }
  
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  const student2 = new Student('Bob', 20, 'S12345');
  console.log(student2.greet());
  

//Activity-3[Static Method and Properties]
//Task-5:Add a static method to the Person class to return the full name(assume a firstName and lastName property).Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  
    static getFullName(person) {
      return `${person.firstName} ${person.lastName}`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  }
  
  const personNew = new Person('himanshu', 'Jonny', 30);
  console.log(Person.getFullName(personNew));
  

//Task-6:Add a static property to the Student class to keep track of the number of students created.Increment this property in the constructor and log the total number of students.

class Student extends Person {
    static studentCount = 0;
  
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age);
      this.studentId = studentId;
      Student.studentCount += 1;
    }
  
    getStudentId() {
      return this.studentId;
    }
  
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    static getStudentCount() {
      return Student.studentCount;
    }
  }
  
  const student1 = new Student('Bob', 'Smith', 20, 'S12345');
  console.log(Student.getStudentCount());
  
  const student3 = new Student('Charlie', 'Brown', 22, 'S12346');
  console.log(Student.getStudentCount());
  

//Activity-4[Getter and Setter]
//Task-7:Add a getter method to the Person class to return the full name(assume a firstName and lastName property).Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  }
  
  const person4 = new Person('himanshu', 'Johnson', 30);
  console.log(person4.fullName);
  

//Task-8:Add a setter method to the Person class to update the name properties(firstName and lastName).Update the name using the setter and log the updated full name.

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(newName) {
      const [firstName, lastName] = newName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  }
  
  const myPerson = new Person('himanshu', 'Johnson', 30);
  console.log(myPerson.fullName);
  person.fullName = 'Eve Adams';
  console.log(myPerson.fullName);
  

//Activity-5[]Private Fields]
//Task-9:Define a class Account with private fields for balance and method to deposit and withdraw money.Ensure that the balance can only be updated through these methods.

class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Invalid withdraw amount');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  

//Task-10:Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const account = new Account(1000);
account.deposit(500);
console.log(`Current balance: ${account.getBalance()}`);
account.withdraw(200);
console.log(`Current balance: ${account.getBalance()}`);
account.withdraw(2000);
console.log(`Current balance: ${account.getBalance()}`);
