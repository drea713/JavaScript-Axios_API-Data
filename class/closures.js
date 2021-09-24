function closureFunc() {
    let name = "Lucas"

    function printName() {
        console.log(name)
    }
    return printName
}

let closureCall = closureFunc()
closureCall()

function multiplier(x) {
    return function(y) {
        return x * y;
    }
}

let doubleMyNumber = multiplier(2)
console.log(doubleMyNumber(25))


let tripleMyNumber = multiplier(3)
console.log(tripleMyNumber(25))

