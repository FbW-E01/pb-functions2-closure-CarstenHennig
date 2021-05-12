// ### Closure

// 1. In your own words, define closure (1-2 sentences).
// 2. Study the following code, then answer the questions below.

// ```js
// function personalDice(name){
//   return function(){
//       // generate random number between 1 and 6
//     const newRoll = Math.floor(Math.random() * 6);
//     console.log(`${name} rolled a ${newRoll}`)
//   }
// }

// const dansRoll = personalDice("Dan");

// const zoesRoll = personalDice("Zoe");

// dansRoll();
// dansRoll();
// ```

// * a. Where is closure used in this code? How can you tell?

// My answer: Closure in in line 9

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

// My answer: Always displayed is the name - here: Dan - and the random number will by changed

// * c. What is the lexical scope of `newRoll`? this might help https://stackoverflow.com/questions/1047454

// The lexical scope of 'newRoll' is 'function()'; the random number won't be exist or being usable outside the function

// 3. Write a function that would allow you to do this using a closure.

// ```js
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
// ```

function createBase(num) {
  return function (x) {
    const plusSix = num + x;
    console.log(`${x} + ${num} is ${plusSix}`);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(21);
createBase(6)(27);
