const InputView = require('../views/InputView');

class AppController {
  start() {
    this.#inputFeature();
  }

  #inputFeature() {
    InputView.readFeature(this.#onInputFeature.bind(this));
  }

  #onInputFeature(feat) {}
}

module.exports = AppController;
