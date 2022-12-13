class Mission {
  #course;

  #level;

  #name;

  constructor(course, level, name) {
    this.#course = course;
    this.#level = level;
    this.#name = name;
  }
}

module.exports = Mission;
