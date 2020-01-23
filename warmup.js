const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("TIMED OUT!")
    }, 300);
});
promise1.then(function(b){
    console.log(b)
});