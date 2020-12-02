const fs = require('fs');

const passwordListPath = 'inputs/day2-input.txt';
const arrayOfPasswordObjects = fs.readFileSync(passwordListPath, 'utf8').split('\n').map((passwordLine) => {
  const lineAsArray = passwordLine.split(' ');
  const passwordRuleMinMax = lineAsArray[0].split('-');
  const lineAsObject = {
    minRule: passwordRuleMinMax[0],
    maxRule: passwordRuleMinMax[1],
    requiredCharacter: lineAsArray[1][0],
    password: lineAsArray[2],
  }

  return lineAsObject;
});


function countCorrectPasswords(arrayOfPasswords) {
  let correctPasswordCount = 0;

  arrayOfPasswords.forEach(passwordObject => {
    let requiredCharacterCount = 0;
    for (let i = 0; i < passwordObject.password.length; i++) {
      const character = passwordObject.password[i];
      if (character === passwordObject.requiredCharacter) {
        requiredCharacterCount += 1;
      }
    }

    if (requiredCharacterCount >= passwordObject.minRule && requiredCharacterCount <= passwordObject.maxRule) {
      correctPasswordCount += 1;
    }
  });

  return correctPasswordCount;
}

function countCorrectPasswordsPartTwo(arrayOfPasswords) {
  let correctPasswordCount = 0;

  arrayOfPasswords.forEach(passwordObject => {
    const firstChar = passwordObject.password[passwordObject.minRule - 1];
    const secondChar = passwordObject.password[passwordObject.maxRule - 1];
    const requiredChar = passwordObject.requiredCharacter;

    if ((firstChar === requiredChar && secondChar !== requiredChar) || (firstChar !== requiredChar && secondChar === requiredChar)) {
      correctPasswordCount += 1;
    }
  });

  return correctPasswordCount;
}

console.log(countCorrectPasswords(arrayOfPasswordObjects));
console.log(countCorrectPasswordsPartTwo(arrayOfPasswordObjects));