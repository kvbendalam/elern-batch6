
var person = {
    name : 'Krishna',
    age: 27,
    email :'abc@gmail.com',
    drive :  function(){
        console.log("driving")
    },
    run : function(){
        return "Running"
    }
}


console.log(person.name)
console.log(person['email'])
person.drive()
console.log(person.run())