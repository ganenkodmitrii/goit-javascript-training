// Short Long Short
// const solution = function (a, b) {
//   if (a.length < b.length) {
//     return a + b + a;
//   } else {
//     return b + a + b;
//   }
// };
// console.log(solution('22', '556'));

// Capitalization and Mutability
// const capitalizeWord = function (word) {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// };

// console.log(capitalizeWord('WoRd'));

// const convertToCelsius = function (temperature) {
//   return (temperature - 32) * (5 / 9);
// };

// const weatherInfo = function (temporary) {
//   const celsius = convertToCelsius(temporary);

//   if (celsius < 0) {
//     return ` ${celsius} is freezing temperature`;
//   }
//   return ` ${celsius} is above freezing temperature`;
// };

// console.log(weatherInfo(50));

//Hello, Name or World!
// const hello = function (name) {
//   const nameUpdate = name[0].toUpperCase() + name.slice(1).toLowerCase();
//   if (name) {
//     return `Hello, ${nameUpdate}`;
//   }

//   return 'Hello, World';
// };
// console.log(hello(''));

//Fix string case
// const solve = function (letters) {
//   let lettersLowerCase = 0;
//   let lettersUpperCase = 0;
//   for (const letter of letters) {
//     // console.log(letter);
//     if (letter === letter.toLowerCase()) {
//       lettersLowerCase += 1;
//       // console.log(lettersLowerCase);
//     } else {
//       lettersUpperCase += 1;
//       // console.log(lettersUpperCase);
//     }
//   }
//   if (lettersLowerCase >= lettersUpperCase) {
//     return letters.toLowerCase();
//   }
//   return letters.toUpperCase();
// };

// console.log(solve('code')); // "code"
// console.log(solve('CODe')); //"CODE"
// console.log(solve('COde')); //"code"
// console.log(solve('Code')); //"code"

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {

//   if (dolphin) {
//     sharkSpeed /= 2;
//   }

//   if (sharkDistance / sharkSpeed >= pontoonDistance / youSpeed) {
//     return 'Alive!';
//   } else {
//     return 'Shark Bait!';
//   }
// }
//pontoonDistance - растояние
// sharkDistance - растояние акулы
//youSpeed - скорость жертвы
// sharkSpeed - cкорость акулы
//dolphin - просто дельфин - если 'true' - то скор

// console.log(shark(12, 50, 4, 8, true)); // "Alive!");
// Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
// console.log(shark(24, 0, 4, 8, true)); //"Shark Bait!");

//Testing 1-2-3
// const number = array =>
//   array.map((element, index) => `${index + 1}: ${element}`);
// const number = function (array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     newArr.push(`${i + 1}: ${element}`);
//   }
//   return newArr;
// };
// console.log(number([])); // []
// console.log(number(['a', 'b', 'c'])); // ['1: a', '2: b', '3: c'],
