const { Random } = require('@woowacourse/mission-utils');

const PairMatcher = {
  match(crewNames) {
    const shuffledCrew = this.generateShuffledCrew(crewNames);
    const pair = this.generatePair(shuffledCrew);
    const hasSoloCrew = shuffledCrew.length % 2;

    if (hasSoloCrew) {
      this.addSoloCrewToPair(pair, shuffledCrew);
    }
    return pair;
  },

  generateShuffledCrew(crewNames) {
    const shuffledNumber = Random.shuffle(crewNames.map((_, index) => index));
    const shuffledCrew = shuffledNumber.map((number) => crewNames[number]);

    return shuffledCrew;
  },

  generatePair(shuffledCrew) {
    const count = Math.floor(shuffledCrew.length / 2);

    return Array.from({ length: count }, (_, index) => [
      shuffledCrew[index * 2],
      shuffledCrew[index * 2 + 1],
    ]);
  },

  addSoloCrewToPair(pair, shuffledCrew) {
    const soloCrew = shuffledCrew[shuffledCrew.length - 1];
    pair[pair.length - 1].push(soloCrew);
  },
};

module.exports = PairMatcher;
