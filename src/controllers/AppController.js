const Crew = require('../models/Crew');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const CrewFileReader = require('../utils/CrewFileReader');
const { FEATURE, COURSE } = require('../utils/constants');

class AppController {
  #featureHandlers = Object.freeze({
    [FEATURE.MATCHING]: this.#onInputMatching.bind(this),
  });

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
    const [course, level, mission] = args.split(',');

    const crewNames = CrewFileReader.read(course);
    console.log(crewNames);
  }
}

module.exports = AppController;
