/**************************************
 *  SPREAD OPERATORS
 * 
 *  MDN Reference: 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
 *************************************/


/* let data = {
    "colors": ['red', 'white', 'blue']
} */

/* let data2 = data
data2.colors = ['green', 'orange', 'black']
console.log(data.colors) */

/* let data3 = { ...data }
data3.colors = ['green', 'orange', 'black']
console.log(data.colors)
console.log(data3.colors) */

/* let data = [1,2,3,10]
let data2 = [8, ...data, 25, 30]
console.log(data2) */

function test(color, name, value) {
    console.log(color, name, value)
}

let data = ["Blue", "Lucas", 25]
test(...data)