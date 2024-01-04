

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Success")
    },2000)
})


// p1.then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err)
// })

async function dbCall(){
    let resp = await p1
    console.log(resp)
}

dbCall()