/**
   Two non-negative integers are called AND-siblings if they can be obtained by each other by rearranging the digits
   of their decimal representations. Write a function that given any string input returns all the distinct AND-siblings
   that can be formed by the positive integers that can be found on it descending order. Please keep in mind the
   efficiency of your algoritm when writing the solution.
 */

/**
 *
 * @param input
 * @returns {string}
 */
function trimAndExtractDigits (input) {
  const trimInput = input.replace(/\s+/g, '');

  const digitMatches = trimInput.match(/\d+/g).map(Number).toString();

  return parseInt(digitMatches.replace(/,/g, '')).toString();
}

/**
 *
 * @param numbers
 * @returns {string}
 */
function arrangeInDescendingOrder (numbers) {
  numbers = numbers.toString().split`,`.map(x => +x);
  let descendingOrder = numbers.sort(function (a, b) {
    return b - a;
  })

  return descendingOrder.toString();
}

/**
 * The following is the function where the solution shall be written
 */
function solution (input) {
  input = trimAndExtractDigits(input);

  let siblingNumbers = [];
  let count = 2;
  let firstSibling = input.split('').reverse().join('');
  
  siblingNumbers.push(firstSibling);

  let lastSibling = siblingNumbers[siblingNumbers.length - 1];

  while (lastSibling !== input) {
    if (count % 2 === 0) {
      let lastSiblingSwap = lastSibling[lastSibling.length - 1];
      let lastButOneSiblingSwap = lastSibling[lastSibling.length - 2];
      let firstElementOfLastSibling = lastSibling[0];

      let newSibling = firstElementOfLastSibling + lastSiblingSwap + lastButOneSiblingSwap;
      lastSibling = newSibling;
      siblingNumbers.push(newSibling);
    } else {
      let reverseLastSibling = siblingNumbers[siblingNumbers.length - 1].split('').reverse().join('');
      lastSibling = reverseLastSibling;
      siblingNumbers.push(reverseLastSibling);
    }

    count++;

    if (lastSibling === input) {
      break;
    }
  }

  return arrangeInDescendingOrder(siblingNumbers);
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
