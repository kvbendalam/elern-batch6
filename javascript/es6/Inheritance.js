class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age= age;
        this.gender = gender;
    }

    walk(){
        console.log(this.name+ " is walking")
    }
}

let p = new Person("RK", 26, "M")
p.walk()
console.log(p)

class Student extends Person{
    constructor(name, age, gender, sid, collegename, fee){
        super(name, age, gender)
        this.sid = sid;
        this.collegename = collegename;
        this.fee = fee;
    }
    study(){
        console.log(this.name + " is studying in " + this.collegename)
    }
}


let s1 = new Student("Krishna", 28, "M", "11009", "IIIT", "30000")
console.log(s1)
s1.walk()
s1.study()