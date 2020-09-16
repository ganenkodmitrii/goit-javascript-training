//пример замыкания
// const makeShef = function (name) {
/*
 * Параметр name это локальная переменная для функции makeShef.
 * Это значит что она будет доступна функции makeDish через замыкание.
 */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

// console.dir(mango);

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(petya.name);
//   },
// };

// petya.showName();

// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);
//     // console.log(element);
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// // console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes
