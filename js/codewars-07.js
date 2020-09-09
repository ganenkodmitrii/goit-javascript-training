//Word values
function wordValue(a) {
  //     const letters = 'abcdefghijklmnopqrstuvwxyz'.split(''); //+1
  //   console.log(letters);

  //     let

  //     for (let i = 0; i < a.length; i += 1){
  //         if (a[i] === letters) {

  //         }
  //     }

  return a
    .map(value =>
      value
        .replace(/\ /gi, '')
        .split('')
        .map(value => value.charCodeAt(0) - 96)
        .reduce((a, b) => a + b, 0),
    )
    .map((value, index) => value * (index + 1));
}

console.log(wordValue(['codewars', 'abc', 'xyz']));
// wordValue(["codewars","abc","xyz"]), [88,12,225] );
//wordValue(["abc abc","abc abc","abc","abc"]), [12,24,18,24] );
