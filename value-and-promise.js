function attachTitle(Val){
    return 'DR. ' + Val;
}
Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);