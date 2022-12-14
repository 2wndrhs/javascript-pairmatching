class Crew {
  #name;

  #pair = [];

  constructor(name, pair) {
    this.#name = name;
    this.#pair = pair.filter((crew) => name !== crew);
  }

  getName() {
    return this.#name;
  }
}

module.exports = Crew;
