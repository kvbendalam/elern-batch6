

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}


var sum = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i
    }
}

console.log(sum)