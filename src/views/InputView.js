const { Console } = require('@woowacourse/mission-utils');

const { FEATURE } = require('../utils/constants');

const QUERY = Object.freeze({
  FEATURE: '기능을 선택하세요.',
  DETAIL: {
    [FEATURE.MATCHING]: '페어 매칭',
    [FEATURE.INQUIRY]: '페어 조회',
    [FEATURE.RESET]: '페어 초기화',
    [FEATURE.QUIT]: '종료',
  },
  COURSE_LEVEL_MISSION: '과정, 레벨, 미션을 선택하세요.',
  EXAMPLE: 'ex) 백엔드, 레벨1, 자동차경주',
});

const InputView = {
  readFeature(callback) {
    Console.print(QUERY.FEATURE);
    Object.values(FEATURE).forEach((feat) =>
      Console.print(`${feat}. ${QUERY.DETAIL[feat]}`),
    );
    Console.readLine('', callback);
  },

  readCourseAndLevelAndMission(callback) {
    Console.print(QUERY.COURSE_LEVEL_MISSION);
    Console.print(QUERY.EXAMPLE);
    Console.readLine('', callback);
  },
};

module.exports = InputView;
