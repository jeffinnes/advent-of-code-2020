const fs = require('fs');

const dayThreeInput = 'inputs/day3-input.txt';
const map = fs.readFileSync(dayThreeInput, 'utf8').split('\n');

function countTheTrees(mapArray, xStep, yStep) {
  let treeCount = 0;
  const mapWidth = mapArray[0].length
  let xCoord = 0;

  for (let yCoord = 0; yCoord < mapArray.length; yCoord += yStep) {
    const mapLine = mapArray[yCoord];

    if (mapLine[xCoord] === '#') {
      treeCount += 1;
    }

    xCoord += xStep;
    // Wrap xCoord to the start of the map 
    // since each line of the map repeats "forever"
    if (xCoord >= mapWidth) {
      xCoord = xCoord - mapWidth;
    }
  }

  return treeCount;
}

const slopeOne = countTheTrees(map, 1, 1);
const slopeTwo = countTheTrees(map, 3, 1);
const slopeThree = countTheTrees(map, 5, 1);
const slopeFour = countTheTrees(map, 7, 1);
const slopeFive = countTheTrees(map, 1, 2);

const productOfAllSlopes = slopeOne * slopeTwo * slopeThree * slopeFour * slopeFive;
console.log(productOfAllSlopes);