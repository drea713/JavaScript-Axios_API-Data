/*
 * An async function is a function declared with the async keyword, 
 * and the await keyword is permitted within them. The async and 
 * await keywords enable asynchronous, promise-based behavior to 
 * be written in a cleaner style, avoiding the need to explicitly 
 * configure promise chains.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
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

const asyncWeWait = async (accept) => {
    let res = await waitingFunc(accept)
    console.log(res)
    //
    //
    ///
    //
    //
    return res
}

asyncWeWait(true)