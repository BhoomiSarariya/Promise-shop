var promise1 = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill("FULFILLED!");
    }, 300);

// Your solution here
});
// Your solution here
promise1.then(function(x){
    console.log(x)
})