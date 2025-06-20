

fetchDataFile1=()=>{
    const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("File1 reading done");
    },2000)
    console.log("logic after file1 reading");
    
    });
   return promise;
}
fetchDataFile2=()=>{
    setTimeout(()=>{
        console.log("File2 reading done");
    },500)
}
fetchDataFile1().then(res=>console.log(res));
console.log("other work 1");
fetchDataFile2();
console.log("other work 2");