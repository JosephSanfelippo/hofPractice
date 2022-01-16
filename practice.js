// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// I - array (fruits);
// O - copy of input array (results);
// C - No use of native functions, return new array, no f loops
// E - N/A

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {

  //create result array
  var results = [];

  //invoke each with input from moreFruits plus iterator function taking
  // inputs of fruit, index, collection
  _.each(fruits, function(fruit, index, collection) {

    //on each iteration, push current element of fruits array to results array
    results.push(fruit);

  });

  //return results array
  return results;

};

// I - array (numbers);
// O - numeric value reflecting how many elements in numbers array are
// multiples of 5
// C - no native methods, no f - loops
// E - N/A

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {

  console.log(numbers);

  //create countOfMultiples var set to empty array
  var countOfMultiples = 0;

  //invoke each(numbers, function(number, index, collection){}
  _.each(numbers, function(item, index, collection) {

    //if numbers[index] divided by number is an integer
    if (Number.isInteger(item / 5)) {

      countOfMultiples++;

    }


  });

  //return results
  return countOfMultiples;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
