function alwaysThrows(){
    throw new  Error("OH NOES")    
}
function iterate(n){
    console.log(n);
    return n+1;
}
function onRejected(error){
    console.log(error.message);
}
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,onRejected);