

var time = setTimeout(function () {
    console.log("Hello E-lern")
}, 10000)

clearTimeout(time);


var interval = setInterval(function () {
    console.log("India")
}, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 10000)