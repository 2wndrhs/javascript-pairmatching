const AppController = require('./controllers/AppController');

class App {
  #appController;

  constructor() {
    this.#appController = new AppController();
  }

  play() {
    this.#appController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
