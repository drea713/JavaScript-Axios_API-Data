/**
 * JavaScript runs code sequentially in top-down order. 
 * However, there are some cases that code runs (or must run) 
 * after something else happens and also not sequentially. 
 * This is called asynchronous programming.
 * 
 * Callbacks make sure that a function is not going to run 
 * before a task is completed but will run right after the task 
 * has completed. It helps us develop asynchronous JavaScript 
 * code and keeps us safe from problems and errors.
 * 
 * source: https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
 * 
 * More references on callback functions:
 * https://www.w3schools.com/js/js_callback.asp
 * https://www.youtube.com/watch?v=XKVgCCjz9EY (Video)
 * https://www.youtube.com/watch?v=qtfi4-8dj9c (Video)
 */


function waitForLoad(name, age, callback) {
  console.log(name, age);
  setTimeout(function() {
    callback(name, age)
  }, 3000)
}

waitForLoad("Derek", 6500, function(x, y) {
  console.log(`FINISHED LOADING DATA FOR ${x} they're ${y} years old`)
})

waitForLoad("Frank", 2500, function(x, y) {
  x = x + " Name"
  console.log(y, x)
})``