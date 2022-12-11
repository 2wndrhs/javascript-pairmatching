const Course = require('./Course');

class Crew {
  #course;

  #name;

  constructor(course, name) {
    this.#course = new Course(course);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Crew;
