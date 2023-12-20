var bird = {
    name: "kingfisher",
    color: "Blue",
    height: "2cm",
    weight: "2kg",
    fly: function () {
        return "Bird is flying"
    },
    eat: function () {
        console.log("Bird is eating")
    },
    drink: function () {
        console.log("Bird is drinking water")
    },
    getBirdName: function () {
        console.log(this.name)
    },
    getBirdColor: function () {
        console.log(this.name + " is in " + this.color)
    }
}

console.log(bird.color)
console.log(bird.weight)

var fl = bird.fly()
console.log(fl)

bird.drink()
bird.getBirdName()
bird.getBirdColor()

