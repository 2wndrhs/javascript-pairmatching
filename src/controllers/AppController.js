const Crew = require('../models/Crew');
const Mission = require('../models/Mission');
const PairMatcher = require('../models/PairMatcher');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const CrewFileReader = require('../utils/CrewFileReader');
const { FEATURE, COURSE } = require('../utils/constants');

class AppController {
  #featureHandlers = Object.freeze({
    [FEATURE.MATCHING]: this.#onInputMatching.bind(this),
  });

  #pairMatchingMap = new Map();

  start() {
    this.#inputFeature();
  }

  #inputFeature() {
    InputView.readFeature(this.#onInputFeature.bind(this));
  }

  #onInputFeature(feat) {
    this.#featureHandlers[feat]();
  }

  #onInputMatching() {
    OutputView.printCoursesAndMissions();

    this.#inputMatchingArgs();
  }

  #inputMatchingArgs() {
    InputView.readCourseAndLevelAndMission(
      this.#onInputMatchingArgs.bind(this),
    );
  }

  #onInputMatchingArgs(args) {
    const [course, level, missionName] = args.split(',');
    const mission = new Mission(course, level, missionName);

    const pairs = this.#matchPair(course);
    OutputView.printPairs(pairs);
  }

  #matchPair(course) {
    const crewNames = CrewFileReader.read(course);
    const pairs = PairMatcher.match(crewNames);

    return pairs.map((pair) => pair.map((crew, _, arr) => new Crew(crew, arr)));
  }
}

module.exports = AppController;
