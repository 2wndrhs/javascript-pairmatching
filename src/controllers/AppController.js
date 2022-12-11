const Crew = require('../models/Crew');
const Level = require('../models/Level');
const PairMatcher = require('../models/PairMatcher');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const CrewFileReader = require('../utils/CrewFileReader');
const { FEATURE, COURSE } = require('../utils/constants');

class AppController {
  #level;

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

    this.#level = new Level(level);
    const crewNames = CrewFileReader.read(course);
    const crews = crewNames.map((name) => new Crew(course, name));

    this.#matchPair(crews);
  }

  #matchPair(crews) {
    const crewNames = crews.map((crew) => crew.getName());

    const pair = PairMatcher.match(crewNames);
    console.log(pair);
  }
}

module.exports = AppController;
