console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return (`Hello, ${name}!`);
}
// Remember to call the function to test
console.log('Test expect "Hello, Madeline! ->', helloName('Madeline'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('Sum expect 4 ->', addNumbers(3, 1));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
  return (numberOne * numberTwo) * numberThree;
}
console.log('Product expect 32 ->', multiplyThree(2, 2, 8))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
firstArray = ['Cactus', 'Jade succulent', 'Spider plant', 'Fiddle leaf fig', 'Zebra succulent', 'Porcelainflower', 'Rex begonia'];
secondArray = [];
function getLast( array ) {
  if(array != '') {
  return array.pop();
  } else {
    return `undefined`;
  }
}
console.log('This is the array:', getLast(secondArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let thirdArray = ['elephant', 'cat', 'monkey', 'chimp', 'platapus', 'lion', 'panda', 'st. bernard'];
function find( value, array ){
  for(animal of array) {
    if(animal === value){
      return true;
    } 
  }
  return false;
}
console.log('Did your guess match??', find('chimp', thirdArray)); //true
console.log('Did your guess match??', find('elephant', thirdArray)); //true
console.log('Did your guess match??', find('dog', thirdArray)); //false
console.log('Did your guess match??', find('st. bernard', thirdArray)); //true


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log(string[0]); // confirmed 'a'.
    if(letter === (string[0])) {
      return true;
    }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log('Should say true', isFirstLetter('b', 'baboon'));
console.log('Should say true', isFirstLetter('z', 'zebra'));
console.log('Should say false', isFirstLetter('s', 'fish'));


// 9. Function to return the sum of all numbers in an array
numberArray = [ 5, 6, 4, 9, 7, 1, 2, 8, 3] // Should be 45 (all sudoku numbers added up lol)
secondNumberArray = [40, 10, 25, 5, 15, 5, 1] // Should be 101.
function sumAll( array ) {
  let sum = 0
  for(i=0; i<array.length; i++) {
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
}
console.log('Sum of array should be 45:', sumAll(numberArray)); // 45
console.log('Sum of array should be 101:', sumAll(secondNumberArray)); // 101


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let inputNumbersArray = [-8, 21, 0, -1000, 6, 35, 240, 1, -1, -47, -790, 843, 34029];
let inputEmptyArray = [];
let outputNewArray = []; // Should be [21, 6, 35, 240, 1, 843, 34029] then [].
function onlyPositive( array ) {
  for(let i=0; i<array.length; i++) {
    if(array[i]>0) {
      outputNewArray.push(array[i]);
    }
    // else {
    //   outputNewArray = [];   THIS MAKES BOTH ARRAYS [843, 34029] WHY?!
    // }
  }
  // outputNewArray = []; // This obviously doesnt work but where am i supposed to put the else statement???
  // I wanted to empty the array somewhere but it messes with the other answer...
  return outputNewArray;
}
console.log('this should be an array of only pos #s:', onlyPositive(inputNumbersArray)); // Works perfectly fine
// Until I try an empty string. The empty string returns the same values.
console.log('this should be an array of only pos #s:', onlyPositive(inputEmptyArray));
// This question literally drove me crazy, if you have any notes, I would greatly appreciate it.


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
