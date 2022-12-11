const OutputView = require('../views/OutputView');

class AppController {
  start() {
    OutputView.printStarting();
  }
}

module.exports = AppController;
