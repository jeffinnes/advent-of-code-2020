const fs = require('fs');

const dayFiveInput = 'inputs/day5-input.txt';
const arrayOfSeats = fs.readFileSync(dayFiveInput, 'utf8').split('\n');
let sanityCheckSeatNum = 0;
let rowsArray = [];
let columnsArray = [];

// Populate row and column arrays
for (let r = 0; r < 128; r++) {
  rowsArray[r] = r;
}

for (let c = 0; c < 8; c++) {
  columnsArray[c] = c;
}

// Function Declarations
function getRow(rowCodeStr, rows) {
  const rowCode = rowCodeStr.split('');
  let rowsSubArray = rows;

  rowCode.forEach(rowIndicator => {
    const splitPoint = rowsSubArray.length / 2;

    if (rowIndicator === 'F') {
      rowsSubArray = rowsSubArray.slice(0, splitPoint);
    } else {
      rowsSubArray = rowsSubArray.slice(splitPoint);
    }
  });
  return rowsSubArray[0];
}

function getColumn(columnCodeStr, columns) {
  const columnCode = columnCodeStr.split('');
  let columnSubArray = columns;

  columnCode.forEach(columnIndicator => {
    const splitPoint = columnSubArray.length / 2;

    if (columnIndicator === 'L') {
      columnSubArray = columnSubArray.slice(0, splitPoint);
    } else {
      columnSubArray = columnSubArray.slice(splitPoint);
    }
  });
  return columnSubArray[0];
}

function getSeatID(rowNum, columnNum) {
  return (rowNum * 8) + columnNum;
}

// Get the Answer
arrayOfSeats.forEach((seatCode) => {
  const row = getRow(seatCode.substring(0, 7), rowsArray);
  const column = getColumn(seatCode.substring(7), columnsArray);
  const seatID = getSeatID(row, column);
  
  if (seatID > sanityCheckSeatNum) {
    sanityCheckSeatNum = seatID;
  }
});

console.log(sanityCheckSeatNum);
