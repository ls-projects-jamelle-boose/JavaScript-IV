// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name
    this.age = attr.age
    this.location = attr.location
    this.gender = attr.gender
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr)
    this.speciality = attr.speciality
    this.favLanguage = attr.favLanguage
    this.catchPhrase = attr.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr)
    this.previousBackground = attr.previousBackground
    this.className = attr.className
    this.favSubjects = attr.favSubjects
  }
  listSubjects() {
    this.favSubjects.forEach(element => console.log(element))
  }
  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${this.subject}`
  }
  sprintChallenge(subject) {
    `${student.name} has begun sprint challenge on ${this.subject}`
  }
}

class ProjectManagers extends Instructor {
  constructor(attr) {
    super(attr)
    this.gradClassName = attr.gradClassName
    this.favInstructor = attr.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to {channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on {subject}`
  }
}