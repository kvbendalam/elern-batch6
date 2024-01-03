class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    walk(){
        console.log(this.name + " is Walking")
    }
    drive(){
        console.log(this.name + " is Driving")
    }
}

var sravan = new Person('Sravan', 22, 'M')
console.log(sravan)
sravan.walk()
sravan.drive()
var madhar = new Person('Madhar', 23, 'M')
console.log(madhar)
madhar.walk()
madhar.drive()
var rk = new Person('rk', 27, 'M')
console.log(rk)
rk.walk()
rk.drive()