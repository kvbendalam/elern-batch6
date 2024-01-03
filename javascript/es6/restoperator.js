

function sum(a,b,...args){
    let res = a+b;
    for(let i=0;i<args.length;i++){
        res = res+args[i]
    }
    console.log(res)
}


sum(2,2,3,10,20)