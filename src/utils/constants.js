const FEATURE = Object.freeze({
  MATCHING: '1',
  INQUIRY: '2',
  RESET: '3',
  QUIT: 'Q',
});

const COURSE = Object.freeze({
  FRONT: '프론트엔드',
  BACK: '백엔드',
});

const LEVEL = Object.freeze({
  ONE: '레벨1',
  TWO: '레벨2',
  THREE: '레벨3',
  FOUR: '레벨4',
  FIVE: '레벨5',
});

const MISSION = Object.freeze({
  [LEVEL.ONE]: ['자동차경주', '로또', '숫자야구게임'],
  [LEVEL.TWO]: ['장바구니', '결제', '지하철노선도'],
  [LEVEL.FOUR]: ['성능개선', '배포'],
});

const REMATCHING = Object.freeze({
  YES: '네',
  NO: '아니오',
});

module.exports = {
  FEATURE,
  COURSE,
  LEVEL,
  MISSION,
  REMATCHING,
};
