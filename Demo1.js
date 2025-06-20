
let resolve=()=>{
    console.log("Success");
}
let reject=()=>{
    console.log("Failure");
}
//snehalfun();
let promise=(resolve, reject)=>{
    resolve();
    reject();
}
promise(resolve,reject);


