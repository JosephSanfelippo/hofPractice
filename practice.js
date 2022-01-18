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


  //invoke filter(fruits, function(fruit))
  desiredFruit = _.filter(fruits, function(fruit) {

    return fruit === targetFruit;


  });

  // //return desiredFruit array
  return desiredFruit;

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  var withLetterP = _.filter(fruits, function(fruit) {

    return fruit[0] === letter;

  });

  return withLetterP;

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  var cookie = _.filter(desserts, function(dessert) {

    return dessert.type === 'cookie';

  });

  return cookie;

};

/*
 *
 *  _.reduce
 *
 */

// I - array of objects (products)
// 0 - numeric value representing sum total of prices of all products
// C - No fr loop or native methods
// E - N/A

// return the total price of all products.
var sumTotal = function(products) {

  //ccreate totalPrice var set to result of _.reduce running
  var totalPrice = _.reduce(products, function(memo, product, index, products) {

    var productPrice = products[index].price;

    var slice = productPrice.slice(1);

    var priceNumber = Number(slice);

    //add price value of current object in products list to memo
    return memo + priceNumber;


  }, 0);

  //return totalPrice
  return totalPrice;

};

// I - array of objects (desserts)
// O - result object listing each dessert type and the number of times it
// appears in input collection
// C - No fr loop, no use of native _.reduce methods
// E - N/A

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  //create result object
  var typesOfDessert = {};

  //create desertTypes var set to result of _.reduce running
  var dessertTypes = _.reduce(desserts, function(memo, dessert, index, desserts) {

    //create type var set to value at type property in current obj in input array
    var type = desserts[index]['type'];

    //if desert type doesnt exist as property in result object
    if (typesOfDessert[type] === undefined) {

      //create property of dessert type in result obj with value of 1
      typesOfDessert[type] = 1;

    //otherwise
    } else {

      //increment value at property by 1
      typesOfDessert[type]++;

    }

  }, 0);

  //return result object
  return typesOfDessert;

};

// I - array of objects (movies)
// O - New array containing movies released between 1990 and 2000
// C - No native _.reduce methods, no fr loops, return new array
// E - N/A

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  //create ninetiesMovies var set to empty array
  var ninetiesMovies = [];

  //create releaseDates var set to result of _.reduce running
  var resleaseDates = _.reduce(movies, function(memo, value, index, movies) {

    //create releaseDate var set to value at release year property in current object in array
    var releaseDate = movies[index].releaseYear;

    //create movieTitle var set to value at title property in current object in array
    var movieTitle = movies[index].title;

    //if release date is between 1990 and 2000 (inclusive)
    if (releaseDate >= 1990 && releaseDate <= 2000) {

      //push title of movie to ninetiesMovies array
      ninetiesMovies.push(movieTitle);

    }

  }, 0);

  //return ninetiesmovies array
  return ninetiesMovies;

};

// I - array of objects (movies); number representing time limit in minutes
// O - boolean stating if there exists a movie with shorter runtime than tl
// C - No native reduce methods, no fr loop, create new array
// E - N/A

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  //create meetsLengthRequirement var set to boolean value of false
  var meetsLengthRequirement = false;

  //create canWatch var set to result of _.reduce running
  var canWatch = _.reduce(movies, function(memo, item, index, movies) {

    //create runTime var set to value at runtime property in current object in movie list
    var runTime = movies[index].runtime;

    //if runTime is less than or equal to time limit
    if (runTime <= timeLimit) {

      //meetsLengthRequirement reassigned to true
      meetsLengthRequirement = true;

      //return meetsLengthRequirement (true case)
      return meetsLengthRequirement;

    }

  }, false);

  //return meetsLengthRequirement (false case)
  return meetsLengthRequirement;

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
