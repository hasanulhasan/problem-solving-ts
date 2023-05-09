class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getDetails() {
    return `Person name: ${this.name} and Age: ${this.age}`
  }
}

class Student extends Person {
  private grade: number;
  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade
  }
  public getGrade() {
    return `Grade of student is ${this.grade}`
  }
}

const person1 = new Person('hasan', 24);
const person2 = new Student('hasan', 24, 88);
console.log(person2.getDetails());