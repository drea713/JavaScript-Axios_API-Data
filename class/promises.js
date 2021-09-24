/*
 * A Promise is a proxy for a value not necessarily known when the promise is created. 
 * It allows you to associate handlers with an asynchronous action's eventual success 
 * value or failure reason. This lets asynchronous methods return values like synchronous 
 * methods: instead of immediately returning the final value, the asynchronous method 
 * returns a promise to supply the value at some point in the future.
 * 
 * A Promise is in one of these states:
 *
 * pending: initial state, neither fulfilled nor rejected.
 * fulfilled: meaning that the operation was completed successfully.
 * rejected: meaning that the operation failed.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * Chart:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
 */

const waitingFunc = (accept) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {
                "colors": ["Red", "Blue", "Green"]
            }

            if (accept) {
                resolve(data)
            } else {
                reject(500)
            }
        }, 5000)
    })
}


console.log('BEFORE WAITING CALL')

waitingFunc(true)
    .then((res) => {
        for(const color of res.colors) {
            console.log(color)
        }
    })
    .catch((err) => {
        console.log(`We failed with a ${err} status code`)
    })

console.log('AFTER WAITING CALL')