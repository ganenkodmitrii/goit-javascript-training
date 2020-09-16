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
 * replace
 *
 * Дана строка 'Я-учу-javascript!'.
 *  Замените все дефисы на '!' с помощью глобального поиска и замены.
 */
// const str = 'Я-учу-javascript!';
// const updateStr = str.replace(/-/g, '!');
// console.log(updateStr);

/**
 * Работа с split

 *Дана строка 'я учу javascript!'. 
С помощью метода split запишите каждое слово этой строки
в отдельный элемент массива.

 *Дана строка 'я учу javascript!'. 
С помощью метода split запишите каждый символ этой строки
в отдельный элемент массива.

 
 */
// const str = 'я учу javascript!';
// console.log(str.split(' '));
// console.log(str.split(''));

/**
 * *В переменной date лежит дата в формате '2025-12-31'.
Преобразуйте эту дату в формат '31.12.2025'.
 */
// const date = '2025-12-31';

// const arr = date.split('-');
// console.log(arr);

// const newArr = arr[2] + '.' + arr[1] + '.' + arr[0];
// console.log(newArr);
