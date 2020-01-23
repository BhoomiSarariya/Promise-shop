function all(one,second){
    
    return new Promise((fulfill,reject)=>{
        var counter=0;
        var arr = [];
        one.then((v)=>{
             arr[0] = v;
             counter++;
             if(counter === 2){
                 fulfill(arr);
             }
        });
        second.then((v)=>{
            arr[1] = v;
            counter++;
            if(counter === 2){
                fulfill(arr);
            }
       });
    })
   
}


all(getPromise1(),getPromise2()).then(console.log)