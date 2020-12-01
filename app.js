const fs = require('fs');

const expenseReportPath = 'inputs/day1-input.txt';

const expenseReportArray = fs.readFileSync(expenseReportPath, 'utf8').split('\n').map((stringOfNumber) => {
  const parsedNum = parseInt(stringOfNumber, 10);

  if (isNaN(parsedNum)) {
    return stringOfNumber;
  }

  return parsedNum;
});

function getDayOneAnswer(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      const sum = inputArray[i] + inputArray[j];

      if (sum === 2020) {
        return inputArray[i] * inputArray[j];
      }
    }
  }
  return 'No two line items can be summed to 2020';
}

console.log(getDayOneAnswer(expenseReportArray));
