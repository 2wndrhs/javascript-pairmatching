const { Console } = require('@woowacourse/mission-utils');

const { COURSE, LEVEL, MISSION } = require('../utils/constants');

const MESSAGE = Object.freeze({
  COURSE: '과정',
  MISSION: '미션',
  LEVEL: '레벨',
  DIVIDER: '#############################################',
});

const OutputView = {
  printCoursesAndMissions() {
    Console.print('\n');
    Console.print(MESSAGE.DIVIDER);
    this.printCourses();
    this.printMissions();
    Console.print(MESSAGE.DIVIDER);
  },

  printCourses() {
    Console.print(`${MESSAGE.COURSE}: ${COURSE.BACK} | ${COURSE.FRONT}`);
  },

  printMissions() {
    Console.print(`${MESSAGE.MISSION}:`);
    Object.values(LEVEL).forEach((level) =>
      Console.print(
        `  - ${level}: ${MISSION[level] ? MISSION[level].join(' | ') : ''}`,
      ),
    );
  },
};

module.exports = OutputView;
