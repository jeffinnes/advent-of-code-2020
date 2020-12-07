const fs = require('fs');

const daySixInput = 'inputs/day6-input.txt';
const recordSplitRegex = new RegExp('(\\n)| ', 'g');
const customsGroupAnswers = fs.readFileSync(daySixInput, 'utf8').split('\n\n');

function getFlattenedGroupResponses(groupAnswers, regexSplitter) {
  const processedArray = groupAnswers.map((singleGroupsAnswersAsString) => {
    const singleGroupsAnswersSplit = singleGroupsAnswersAsString.split(regexSplitter);
    let singleGroupFlattened = [];

    singleGroupsAnswersSplit.forEach((singlePersonsAnswers) => {
      if (singlePersonsAnswers && singlePersonsAnswers !== '\n') {
        let answers = singlePersonsAnswers.split('');
        answers.forEach((singleAnswer) => {
          if (!singleGroupFlattened.includes(singleAnswer)) {
            singleGroupFlattened.push(singleAnswer);
          }
        });
      }
    });

    return singleGroupFlattened;
  });

  return processedArray;
}

function sumAffimativeAnswers(arrayOfFlattenedAnswers) {
  let sum = 0;
  arrayOfFlattenedAnswers.forEach((flattenedAnswer) => {
    sum += flattenedAnswer.length;
  });

  return sum;
}

const flattenedAnswers = getFlattenedGroupResponses(customsGroupAnswers, recordSplitRegex)

console.log(sumAffimativeAnswers(flattenedAnswers));