var marks = -40;

if (marks >= 90 && marks <= 100) {
    console.log("Distinction")
} else if (marks >= 80 && marks < 90) {
    console.log("A")
} else if (marks >= 70 && marks < 80) {
    console.log("B")
} else if (marks >= 60 && marks < 70) {
    console.log("C")
} else if (marks >= 50 && marks < 60) {
    console.log("D")
} else if (marks >= 0 && marks < 50) {
    console.log("Fail")
} else {
    console.log("Not a valid input")
}