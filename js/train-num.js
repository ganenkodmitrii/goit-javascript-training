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

// Can we divide it ?
// const isDivideBy = (number, a, b) =>
//   number % a === 0 && number % b === 0 ? true : false;
// console.log(isDivideBy(45, 5, 15));

// Test.assertSimilar(isDivideBy(-12, 2, -6), true);
// Test.assertSimilar(isDivideBy(-12, 2, -5), false);
// Test.assertSimilar(isDivideBy(45, 1, 6), false);
// Test.assertSimilar(isDivideBy(45, 5, 15), true);
// Test.assertSimilar(isDivideBy(4, 1, 4), true);
// Test.assertSimilar(isDivideBy(15, -5, 3), true);

// Dashatize it
// function dashatize(num) {
//   let newNum = String(num).split('');
//   let arr = [];
//   for (const el of newNum) {
//     // console.log(el);
//     if (el % 2 === 0) {
//       arr.push(el);
//       console.log(arr);
//     }
//   }
//   // return newNum.join('-');
// }

// console.log(dashatize(274));
// console.log(dashatize(6815));
