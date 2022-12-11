const InputView = require('../views/InputView');

const { FEATURE } = require('../utils/constants');
const OutputView = require('../views/OutputView');

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

  #onInputMatchingArgs(args) {}
}

module.exports = AppController;
