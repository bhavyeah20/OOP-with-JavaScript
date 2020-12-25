class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, dogFriendly) {
    super(name, age);
    this.dogFriendly = dogFriendly;
  }
  meow() {
    return "Meooowww!!!!";
  }
}
