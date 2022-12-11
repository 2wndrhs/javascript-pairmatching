const fs = require('fs');
const path = require('path');

const { COURSE } = require('./constants');

const CrewFileReader = {
  read(course) {
    const filePath = this.toRelativePath(course);
    const crewNames = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');

    return crewNames.split(' ');
  },

  toRelativePath(course) {
    if (course === COURSE.BACK) {
      return `../../resources/backend-crew.md`;
    }

    return `../../resources/frontend-crew.md`;
  },
};

module.exports = CrewFileReader;
