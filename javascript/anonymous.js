

const ann = function () {
    return "Anonymous function"
}

console.log(ann())

const ann1 = function () {
    console.log("Anonymous function 2")
}

ann1()

const sum = function (num1, num2) {
    return num1 + num2
}

console.log(sum(5, 5))