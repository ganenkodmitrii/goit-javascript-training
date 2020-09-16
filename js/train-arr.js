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

//Filling an array (part 1)
// const arr = N => (N ? [...Array(N).keys()] : []);
// console.log(arr(4));

// Get the mean of an array (codewars)
const arr = [2, 5, 13, 20, 16, 16, 10];

function getAverage(marks) {
  let num = 0;
  let newNUm = 0;
  for (let i = 0; i < marks.length; i += 1) {
    const el = marks[i];
    // let ind = i + 1;
    num += el;
    newNUm = num / (i + 1);
  }
  return Math.floor(newNUm);
}
console.log(getAverage(arr));
// Test.assertEquals(getAverage([2, 2, 2, 2]), 2);
// Test.assertEquals(getAverage([1, 2, 3, 4, 5]), 3);
// Test.assertEquals(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
