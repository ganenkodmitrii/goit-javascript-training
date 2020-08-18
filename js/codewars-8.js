// Short Long Short
const solution = function (a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
};
// console.log(solution('22', '556'));

// Capitalization and Mutability
const capitalizeWord = function (word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

// console.log(capitalizeWord('WoRd'));

const convertToCelsius = function (temperature) {
  return (temperature - 32) * (5 / 9);
};

const weatherInfo = function (temporary) {
  const celsius = convertToCelsius(temporary);

  if (celsius < 0) {
    return ` ${celsius} is freezing temperature`;
  }
  return ` ${celsius} is above freezing temperature`;
};

// console.log(weatherInfo(50));

//Hello, Name or World!
const hello = function (name) {
  const nameUpdate = name[0].toUpperCase() + name.slice(1).toLowerCase();
  if (name) {
    return `Hello, ${nameUpdate}`;
  }

  return 'Hello, World';
};
// console.log(hello(''));

//Fix string case
const solve = function (letters) {
  let lettersLowerCase = 0;
  let lettersUpperCase = 0;
  for (const letter of letters) {
    // console.log(letter);
    if (letter === letter.toLowerCase()) {
      lettersLowerCase += 1;
      // console.log(lettersLowerCase);
    } else {
      lettersUpperCase += 1;
      // console.log(lettersUpperCase);
    }
  }
  if (lettersLowerCase >= lettersUpperCase) {
    return letters.toLowerCase();
  }
  return letters.toUpperCase();
};

// console.log(solve('code')); // "code"
// console.log(solve('CODe')); //"CODE"
// console.log(solve('COde')); //"code"
// console.log(solve('Code')); //"code"
