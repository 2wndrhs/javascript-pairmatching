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
    this.#checkRematching(course, level, missionName);
    const mission = new Mission(course, level, missionName);
    const pairs = this.#matchPair(course);

    OutputView.printPairs(pairs);
    this.#pairMatchingMap.set(mission, pairs.flat(2));
    this.#inputFeature();
  }

  #checkRematching(course, level, missionName) {
    const hasSameMission = [...this.#pairMatchingMap.keys()].some((mission) =>
      mission.isSameMission(course, level, missionName),
    );

    if (hasSameMission) {
      this.#inputRematchingCommand();
    }
  }

  #matchPair(course) {
    const crewNames = CrewFileReader.read(course);
    const pairs = PairMatcher.match(crewNames);
    const toCrew = (crew, _, pair) => new Crew(crew, pair);

    return pairs.map((pair) => pair.map(toCrew));
  }

  #inputRematchingCommand(command) {
    InputView.readRematching(this.#onInputRematchingCommand.bind(this));
  }

  #onInputRematchingCommand(command) {}
}

module.exports = AppController;
