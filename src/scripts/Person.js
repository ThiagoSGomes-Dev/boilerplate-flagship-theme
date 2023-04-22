class Person {
  constructor(name) {
    this.name = name
    this.greet()
  }

  greet() {
    console.log(`Olá meu nome é ${this.name}.`)
  }
}

export default Person