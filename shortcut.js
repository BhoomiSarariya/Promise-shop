var promise = new Promise(function (fulfill, reject) {
    fulfill('SECRET VALUE');
  }); 
Promise.resolve('SECRET VALUE');  
Promise.reject(new Error('SECRET VALUE'));
promise.catch(function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
  });