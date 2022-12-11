const { Console } = require('@woowacourse/mission-utils');

const { FEATURE } = require('../utils/constants');

const MESSAGE = Object.freeze({
  START: '기능을 선택하세요.',
  FEATURE: {
    [FEATURE.MATCHING]: '페어 매칭',
    [FEATURE.INQUIRY]: '페어 조회',
    [FEATURE.RESET]: '페어 초기화',
    [FEATURE.QUIT]: '종료',
  },
});

const OutputView = {
  printStarting() {
    Console.print(MESSAGE.START);
    Object.values(FEATURE).forEach((feat) =>
      Console.print(`${feat}. ${MESSAGE.FEATURE[feat]}`),
    );
  },
};

module.exports = OutputView;
