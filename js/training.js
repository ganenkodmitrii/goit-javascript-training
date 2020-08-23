// 4 Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются
// на цифру 1, 2 или 5.

// const arr = [10, 20, 30, 50, 235, 3000];
// let th, hn, dec;
// for (let i = 0; i < arr.length; i++) {
//   th = arr[i] / 1000;
//   hn = arr[i] / 100;
//   dec = arr[i] / 10;
//   if (th >= 1 && ((th < 6 && th > 4) || (th < 3 && th > 0))) {
//     // console.log(arr[i]);
//   } else if (hn >= 1 && ((hn < 6 && hn > 4) || (hn < 3 && hn > 0))) {
//     // console.log(arr[i]);
//   } else if (dec >= 1 && ((dec < 6 && dec > 4) || (dec < 3 && dec > 0))) {
//     // console.log(arr[i]);
//   }
// }

//5 Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(arr.join('-'));
// let str = '';
// for (const el of arr) {
//   str += `-${el}`;
// }
// console.log(str);

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

/*
 
*/

/**
  Напишите скрипт, который будет находить факториал числа. 
 Факториал (обозначается !) - это произведение (умножение) всех целых чисел, 
 меньше данного, и его самого. Например, 4! = 1*2*3*4.
const maxNum = 4;
let minNum = 1;
for (let i = 1; i <= maxNum; i += 1) {
  minNum *= i;
}
console.log(minNum);
*/

/**
  Дана переменная str, 
 в которой хранится какой-либо текст. 
 Реализуйте обрезание длинного текста по следующему принципу: 
 если количество символов этого текста больше заданного в переменной n, 
 то в переменную result запишем первые n символов строки str
  и добавим в конец троеточие '...'. 
  В противном случае в переменную result запишем содержимое переменной str.
 */
// const str = 'я учу javascript!';
// console.log(str);
// const n = 7;

// let result = '';
// console.log(str.length);
// if (str.length > n) {
//   result = str.substr(0, n) + '...';
// } else {
//   result = str;
// }
// console.log(result);

/**
 * Дана строка 'Я-учу-javascript!'.
 *  Замените все дефисы на '!' с помощью глобального поиска и замены.
 */
