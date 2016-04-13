// Write a function that takes a string and returns the first character of the string.
var firstCharacter = function(string) {
  return string.charAt(0);
}

// Write a function that takes a string and returns the last character of a string.
var lastCharacter = function(string) {
  var stringLength = string.length;
  return string.charAt(stringLength);
}

// Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string
var findCharacter = function(string, number) {
  return string.charAt(number);
}

// Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
var addNumbers = function(a, b) {
  var result = a + b;
  return result;
}

// Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.
var multiplyNumbers = function(a, b) {
  var result = a * b;
  return result;
}

// Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.
var manipulateNumbers = function(a, b, operationType) {
  if (operationType === "add") {
    return a + b;
  }
  else if (operationType   === "substract") {
    return a - b;
  }
  else if (operationType === "mult") {
    return a * b;
  }
  else if (operationType === "div") {
    return a / b;
  }
  else {
    return 0;
  }
}

// Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.
var multipyString = function(string, count) {
  if (count > 0) {
    var result = (string + " ").repeat(count);
    console.log(result);
    return result;
  }
  else {
    return 0;
  }
}

// Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”.
var reverseString = function(string) {
  var result = string.split('').reverse().join('');
  console.log(result);
  return result;
}

// Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.
var numberFactorial = function(number) {
  if (number === 0) {
    return 1;
  }
  else {
    var result = number * numberFactorial(number - 1);
    return result;
  }
}

// Write a function that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.
var longestInPhrase = function(phrase) {
  var wordsArray = phrase.split(' ');
  var wordsCount = wordsArray.length;
  if (wordsCount > 0) {
    var result = wordsArray[0];
    return result;
  }
}

// Write a function that takes a phrase, and returns the same phrase with every word capitalized. For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.
var capitalizePhrase = function(phrase) {
  var wordsArray = phrase.split(' ');
  return wordsArray = wordsArray.map(function(word) {
    return (word.charAt(0).toUpperCase() + word.substring(1,word.length));
  }).join(' ');
}

// Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.
var largestNumber = function(numbers) {
  largest = numbers[0];
  for (var i = 0; i<=numbers.length; i++) {
    if (numbers[i] > largest) {
      largest  = numbers[i];
    }
  }
  return largest;
}

// Write a function that takes an array, and returns a filtered array. The filtered array should only contain the truthy values from the initial array. Hint: there is an array method called filter that can help you with this :)
var truthyArray = function(values) {
  var results = [];
  for (var i = 0; i <= values.length; i++) {
    if (values[i]) {
      results.push(values[i]);
    }
  }
  return results;
}

// Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.
var addNumbersArray = function(numbers) {
  var sum = 0;
  for (var i = 0; i <= numbers.length;i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
    }
  }
  return sum;
}

// Write a function that takes two arrays, and returns an array of all elements that are only in one array. For example, with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. Test your function on different inputs. Hint: you should look up array methods indexOf and slice.
var uniqueElements = function(a,b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    var value = a[i];
    if (b.indexOf(value) === -1) {
      c.push(value);
    }
  }
  for (var i = 0; i < b.length; i++) {
    var value = b[i];
    if (a.indexOf(value) === -1) {
      c.push(value);
    }
  }
  return c;
}

console.log(uniqueElements([1,2],[2,3,4])); // should output: [1,3,4]

// Mini Challange: Write a function that takes an array and a function as arguments. The function should return a new array that maps every element of the input array by passing it through the function you received. You are not allowed to use Array.map for this challenge, otherwise it would be too easy :)
