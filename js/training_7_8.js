// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// /////////////////////////////////////////////////
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName) {
//   return;
// }

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
///////////////////////////////////////////////////////////////////////////////////////
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
///////////////////////////////////////////////////////
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName))
//     {
//       return makePizza(pizzaName);}
//     return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`); },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// //////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(function calculateTotalPrice(element, index, array) {
//     totalPrice += element;
//   });
//   // Change code above this line
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([164, 48, 291]);
// ////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number, index) {
//     if (numbers[index] > value) {
//       filteredNumbers.push(numbers[index]);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
//////////////////////////////////////////////////////

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (firstArrayElement) {
//     if (secondArray.includes(firstArrayElement)) {
//       commonElements.push(firstArrayElement);
//     }
//   });
//   console.log(commonElements);
//   return commonElements;
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);/////////////
//////////////////////////////////////////////////////////////////
// Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
//////////////////////////////////////////////////////

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push((number += value));
//     } else {
//       newArray.push(number);
//     }
//   });
//   console.log(newArray);
//   return newArray;
// }
// changeEven([2, 8, 3, 7, 4, 6], 10);
///////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
//////////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
////////////////////////////////////////////////////////////////
// const getUserNames = users => {
//   const nameVisitor = users.map(user => user.name);
//   console.log(nameVisitor);
//   return nameVisitor;
// };
//////////////////////////////////////////////////////////
// const getUserEmails = users => {
//   const nameVisitor = users.map(user => user.email);
//   return nameVisitor;
// };
//////////////////////////////////////////////////////////////////
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
///////////////////////////////////////////////////////////////////////////////
// const getUsersWithEyeColor = (users, color) =>
//   (booksByAuthor = users.filter(user => user.eyeColor === color));
///////////////////////////////////////////////////////////////////////////
// const getUsersWithAge = (users, minAge, maxAge) =>
//   (midleAge = users.filter(user => user.age > minAge && user.age < maxAge));
///////////////////////////////////////////////////////////////////////////////////
// const getUsersWithFriend = (users, friendName) =>
//   (midleName = users.filter(user => user.friends.includes(friendName)));
//////////////////////////////////////////
// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//         .filter((course, index, array) => array.indexOf(course) === index);
//////////////////////////////////////////////////////////////////////////
