// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

////////////////////////////////////////////

// // Change code below this line
// function add(...args) {
//   let totalArgs = 0;
//   for (const arg of args) {
//     totalArgs += arg;
//   }
//   console.log(totalArgs);
//   return totalArgs;
//   // Change code above this line
// }

// add(12, 4, 11, 48);

/////////////////////////////////////////////////

// function findMatches(massFirst, ...args) {
//   const matches = [];

//   console.log(massFirst);
//   console.log(args);
//   for (const arg of args) {
//     const inclArg = massFirst.includes(arg);
//     if (inclArg) {
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
//////////////////////////////////////////////////
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };
//////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const itemPotions = this.potions;
//     // const { potions } = this;
//     for (let i = 0; i < itemPotions.length; i += 1) {
//       if (itemPotions[i] === potionName) {
//         itemPotions.splice(i, 1);
//       }
//     }
//     console.log(itemPotions);
//     return itemPotions;

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion('Dragon breath');
//////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
// }
/////////////////////////////////////////////////////////////////
// Change code below this line

//   addPotion(newPotion) {
//     const { potions } = this;
//     const newName = newPotion.name;
//     for (const potion of potions) {
//       if (potion.name.includes(newName)) {
//         console.log(`Error! Potion ${newName} is already in your inventory!`);
//         return `Error! Potion ${newName} is already in your inventory!`;
//       }
//     }
//     console.log(this.potions);
//     this.potions.push(newPotion);
//   },
// };
//   for (const potion of potions) {
//     if (potion === newPotion) {
//       console.log(`Error! Potion ${newPotion} is already in your inventory!`);
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//     continue;
//   }
//   console.log(this.potions);
//   return this.potions.push(newPotion);
// },
// };

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         console.log(this.potions);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');

//////////////////////////////////////////////////////////
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
