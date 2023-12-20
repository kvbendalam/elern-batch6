
var marks = [99, 100, 78, 79, 89, 90, 78, 78, 57, 34, 34, 2, 23, 5, 6, 7, 8]

// for (var i = 0; i <= marks.length; i++) {
//     console.log(marks[i])
// }

var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}

console.log(sum)
console.log(sum / marks.length)