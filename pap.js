// function first(){
//  return new Promise((fulfill)=>{
//      console.log(20)
//  })
// }
// function second(){
// return new Promise((onFilled)=>{
    
// })
// }
let fvalue =first();
let svalue =fvalue.then((x)=>{
    return second(x);
}) ;
svalue.then(console.log);