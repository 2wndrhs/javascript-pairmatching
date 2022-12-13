class Mission {
  #course;

  #level;

  #name;

  constructor(course, level, name) {
    this.#course = course;
    this.#level = level;
    this.#name = name;
  }

  isSameMission(course, level, name) {
    const isSameCourse = this.#course === course;
    const isSameLevel = this.#level === level;
    const isSameMissionName = this.#name === name;

    return isSameCourse && isSameLevel && isSameMissionName;
  }
}

module.exports = Mission;
