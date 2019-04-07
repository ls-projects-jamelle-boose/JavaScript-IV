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
    this.specialty = attr.specialty
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
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr)
    this.gradClassName = attr.gradClassName
    this.favInstructor = attr.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const Fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const Barney = new Student({
  name: 'Barney',
  location: 'Rubble',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  previousBackground: 'car mechanic',
  className: 'CS132',
  favSubjects: ['HTML', 'JavaScript', 'CSS']
});

const Rosalinda = new ProjectManager({
  name: 'Rosalinda',
  location: 'Springdale',
  age: 20,
  gender: 'female',
  favLanguage: 'Java',
  specialty: 'Backend',
  catchPhrase: 'The Story of a Murderer',
  previousBackground: 'Office Clerk',
  className: 'AR764',
  favSubjects: ['Painting', 'Drawing', 'Embroidery'],
  gradClassName: 'CBS19',
  favInstructor: 'Tina'
});

// Person receives speak as a method, log phrase "Hello my name is *name*, I am from *location*"
console.log(Fred.speak())

// `demo` receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
console.log(Fred.demo('CSS'))

// `grade` receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
console.log(Fred.grade(Barney, 'CSS, good job!'))

// `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
console.log(Barney.listSubjects())

// `PRAssignment` a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
console.log(Barney.PRAssignment('CSS'))

// `sprintChallenge` similar to `PRAssignment` but logs out student.name has begun sprint challenge on {subject}
console.log(Barney.sprintChallenge('CSS'))

// `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
console.log(Rosalinda.standUp('random'))

// `debugsCode` a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
console.log(Rosalinda.debugsCode(Barney, 'CSS'))