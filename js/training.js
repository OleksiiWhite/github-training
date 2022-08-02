// function slugify(title) {
//   // Change code below this line
//   let slug;
//   slug = title.split(' ');
//   slug = slug.join('-');
//   slug = slug.toLowerCase();
//   console.log(slug);
//   return slug;

//   // Change code above this line
// }
// slugify('How to become a JUNIOR developer in TWO WEEKS');

//////////////////////////////////////////////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let allArray = firstArray.concat(secondArray);
//   const longArray = allArray.length;
//   if (longArray > maxLength) {
//     return allArray.slice(0, maxLength);
//   }
//   return allArray;
//   // Change code above this line
// }
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);

////////////////////////////////////////////////////////////////////////////

// function calculateTotal(number) {
//   let total = 0;
//   for (i = 1; i <= number; i += 1) {
//     total += i;
//     console.table(total);
//   }

//   return total;
// }

///////////////////////////////////////////////////////////////////////////////////////////

// function findLongestWord(string) {
//   const wordsOffString = string.split(' ');
//   let longerWord = wordsOffString[0];

//   for (const wordOffString of wordsOffString) {
//     if (longerWord.length < wordOffString.length) {
//       longerWord = wordOffString;
//     }
//   }
//   return longerWord;
// }

// findLongestWord('May the force be with you');

////////////////////////////////////////////////////////////////////////////////////////////
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max + 1; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.table(numbers);
//   return numbers;
// }
// createArrayOfNumbers(14, 17);

////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   const bigNumbers = [];
//   const numbersLong = numbers.length - 1;

//   for (const i = 0; i <= numbersLong; i += 1) {
//     if (numbers[i] > value) {
//       bigNumbers = bigNumbers.push(numbers[i]);
//     }
//     console.log(bigNumbers);
//     return bigNumbers;
//   }
//   console.log(bigNumbers);
//   return bigNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);

////////////////////////////////////////////////////
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   fruits.includes(fruit);
//   return;
// }
////////////////////////////////////////

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const twoArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       twoArray.push(array1[i]);
//     }
//   }
//   console.log(twoArray);
//   return twoArray;

//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
///////////////////////////////////////////////////////////

// function getEvenNumbers(start, end) {
//   const twoAll = [];
//   for (i = start; i <= end; i+=1){
//     if (i % 2 === 0){
//       twoAll.push(i);
//     }
//   }
//   return twoAll;
//   }

////////////////////////////////////////////////////////
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//       continue;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//////////////////////////////////////////////
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

///////////////////////////////////////////////////////
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//////////////////////////////////////////////////////////////////
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const valuesPropName = [];
//   for (const product of products) {
//     const { name, price, quantity } = product;

//     for (const key in product) {
//       if (propName === key) {
//         valuesPropName.push(product[key]);
//       }
//     }
//   }

//   console.log(valuesPropName);
//   return valuesPropName;
// }
// getAllPropValues('price');

///////////////////////////////////////////
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       const totalPriceProd = product.price * product.quantity;
//       totalPrice += totalPriceProd;
//       return totalPrice;
//     }
//   }
// }
// calculateTotalPrice('Droid');
////////////////////////////////////////////
