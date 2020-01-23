function parsePromised(){
    return Promise((fulfill,reject) =>{ try{
        fullfil("BHOOMI");
    }
        catch(e){
            reject(e)
        }
    })
}
function onRejected(error){
    console.log(error.message);
}
parsePromised.then(null,onRejected)