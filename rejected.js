const promise1 =new Promise((fulfill,reject) =>{
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"))
}
);
function onRejected(error){
    console.log(error.message);
}
promise1.then((obj)=>{
    console.log(obj);
},(f)=>console.log(f.message));