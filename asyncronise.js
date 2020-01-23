const promise1 = new Promise((fulfill)=>
{
    fulfill("PROMISE VALUE");
});
promise1.then((obj)=>{
    console.log(obj);
}
);
console.log("MAIN PROGRAM");