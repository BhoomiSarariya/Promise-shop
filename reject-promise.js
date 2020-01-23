var promise1 = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 300);
  });
  
  function onReject (error) {
    // Your solution here
    console.log(error.message);
  }
  
  // Your solution here
  promise1.then(console.log,function(m){
    onReject(m);
  });