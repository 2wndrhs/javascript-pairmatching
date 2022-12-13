const fs = require('fs');
const path = require('path');

const { COURSE } = require('./constants');

const CrewFileReader = {
  relativePath: {
    [COURSE.BACK]: `../../resources/backend-crew.md`,
    [COURSE.FRONT]: `../../resources/frontend-crew.md`,
  },

  read(course) {
    const filePath = this.relativePath[course];
    const crewNames = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');

    return crewNames.split(' ');
  },
};

module.exports = CrewFileReader;
