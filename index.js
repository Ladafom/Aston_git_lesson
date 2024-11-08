// task3

// const Person = Object.create({
//   logInfo(){
//     console.log(`Hi, my name is ${this.name}, I'm ${this.age}, my hobbies are: ${this.hobby}`)
//   }
// })

// const Person = new Object({
//   logInfo(){
//     console.log(`Hi, my name is ${this.name}, I'm ${this.age}, my hobbies are: ${this.hobby}`)
//   }
// })

const Person = {
  logInfo(){
    console.log(`Hi, my name is ${this.name}, I'm ${this.age}, my hobbies are: ${this.hobby}`)
  }
}

const Person2 = {
  name: 'Lada Fomina',
  age: 21,
  hobby: ['crochet', ' cycling', ' computer games'],
  __proto__: Person
}

Person2.logInfo()

// task 4

class PersonThree {
  constructor(name,age,hobby){
    this.name = name
    this.age = age
    this.hobby = hobby
  }
  get personName(){
    return this.name
  }
  set personName(value){
    this.name = value
  }
}

Object.setPrototypeOf(PersonThree.prototype,Person)

const person = new PersonThree('Ivan Ivanov', 10, ['walk', ' play with friends'])

person.personName = 'Ivan Sidorov'

person.logInfo()