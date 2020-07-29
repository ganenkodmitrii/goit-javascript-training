// Short Long Short
function solution(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}
// console.log(solution('22', '556'));

// Capitalization and Mutability
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// console.log(capitalizeWord('WoRd'));
