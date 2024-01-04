let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(5)
    },2000)
})

p1.then((responses)=>{
    console.log("Success"+ responses)
}).catch((err)=>{
    console.log("Error : " + err)
})

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Some error occured")
//     },1000)
// })

// p2.then((response)=>{
//     console.log(response)
// }).catch((err)=>{
//     console.log(err)
// })