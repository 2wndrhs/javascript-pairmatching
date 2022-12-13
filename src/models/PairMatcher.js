const { Random } = require('@woowacourse/mission-utils');

const PairMatcher = {
  match(crewNames) {
    const shuffledCrew = this.generateShuffledCrew(crewNames);
    const pairs = this.generatePair(shuffledCrew);
    const hasSoloCrew = shuffledCrew.length % 2;

    if (hasSoloCrew) {
      return this.addSoloCrewToPair(pairs, shuffledCrew);
    }
    return pairs;
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

  addSoloCrewToPair(pairs, shuffledCrew) {
    const soloCrew = shuffledCrew[shuffledCrew.length - 1];
    pairs[pairs.length - 1].push(soloCrew);

    return pairs;
  },
};

module.exports = PairMatcher;
