

function sum(fn) {
    console.log("Sum function is calculated")
    fn()
}


function callBackfn() {
    console.log("Call back function is called")
}

sum(callBackfn)