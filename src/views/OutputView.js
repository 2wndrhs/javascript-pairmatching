const { Console } = require('@woowacourse/mission-utils');

const { COURSE, LEVEL, MISSION } = require('../utils/constants');

const MESSAGE = Object.freeze({
  COURSE: '과정',
  MISSION: '미션',
  LEVEL: '레벨',
  DIVIDER: '#############################################',
  RESULT: '페어 매칭 결과입니다.',
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

  printPairs(pairs) {
    Console.print(`\n${MESSAGE.RESULT}`);
    pairs
      .map((pair) => pair.map((crew) => crew.getName()))
      .forEach((pair) => {
        Console.print(pair.join(' : '));
      });
  },
};

module.exports = OutputView;
