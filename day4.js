const fs = require('fs');

const dayFourInput = 'inputs/day4-input.txt';
const passportRecordSplitRegex = new RegExp('(\\n)| ', 'g');
const passportBatch = fs.readFileSync(dayFourInput, 'utf8').split('\n\n');

function processPasportBatch(passportBatchArray, regexSplitter) {
  const processedArray = passportBatchArray.map((rawPassportRecord) => {
    let recordAsObject = {};
    const processedRecord = rawPassportRecord.split(regexSplitter);
    
    processedRecord.forEach(recordItem => {
      if (recordItem && recordItem !== '\n' && recordItem !== '') {
        const splitItem = recordItem.split(':');
        recordAsObject[splitItem[0]] = splitItem[1];
      }
      
    });

    return recordAsObject;
  });

  return processedArray;
}


function countValidPassports(passportBatch) {
  let count = 0;
  passportBatch.forEach(record => {
    if ('byr' in record 
    && 'iyr' in record 
    && 'eyr' in record 
    && 'hgt' in record 
    && 'hcl' in record 
    && 'ecl' in record 
    && 'pid' in record) {
      count += 1;
    }
  });

  return count;
}

const processedBatch = processPasportBatch(passportBatch, passportRecordSplitRegex);
const validPassportCount = countValidPassports(processedBatch);

console.log(validPassportCount);
