////////////////////////////////////////////////////////////////////

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let allArray = firstArray.concat(secondArray);
  const longArray = allArray.length;
  if (longArray > maxLength) {
    return allArray.slice(0, maxLength);
  }
  return allArray;
  // Change code above this line
}
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);

//////////////////////////////////////////////////////////////////////////

function findLongestWord(string) {
  const wordsOffString = string.split(' ');
  let longerWord = wordsOffString[0];

  for (const wordOffString of wordsOffString) {
    if (longerWord.length < wordOffString.length) {
      longerWord = wordOffString;
    }
  }
  return longerWord;
}

findLongestWord('May the force be with you');

//////////////////////////////////////////////////////////////////////////////////////////
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max + 1; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  console.table(numbers);
  return numbers;
}
createArrayOfNumbers(14, 17);

//////////////////////////////////////////////////

function filterArray(numbers, value) {
  const bigNumbers = [];
  const numbersLong = numbers.length - 1;

  for (const i = 0; i <= numbersLong; i += 1) {
    if (numbers[i] > value) {
      bigNumbers = bigNumbers.push(numbers[i]);
    }
    console.log(bigNumbers);
    return bigNumbers;
  }
  console.log(bigNumbers);
  return bigNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);

//////////////////////////////////////////////////
function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  fruits.includes(fruit);
  return;
}
//////////////////////////////////////

function getCommonElements(array1, array2) {
  // Change code below this line
  const twoArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      twoArray.push(array1[i]);
    }
  }
  console.log(twoArray);
  return twoArray;

  // Change code above this line
}
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
/////////////////////////////////////////////////////////

function getEvenNumbers(start, end) {
  const twoAll = [];
  for (i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      twoAll.push(i);
    }
  }
  return twoAll;
}

//////////////////////////////////////////////////////
function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
      continue;
    }
  }
  // Change code above this line
  return propCount;
}
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

////////////////////////////////////////////
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}
