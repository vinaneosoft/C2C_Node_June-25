let fetchData1=()=>{
    let data1;
    const promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data1="this is data from file 1";
            resolve(data1);
        },2000) 
    });
    return promise; 
}
let fetchData2=()=>{
    let data2;
    const promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
        data2="this is data from file 2";
        resolve(data2);
    },500)
    })
    return promise;
}
fetchData1().then((data)=>{
    console.log(data);
}, (errormessage)=>{
    console.log(errormessage);
});

fetchData2().then((data)=>{
    console.log(data);
},(errormessage)=>{
    console.log(errormessage);
    
})

fetchData1().then((data)=>{
    console.log(data);
}).catch((errormessage)=>{
    console.log(errormessage);
}).finally(()=>{
    console.log("mandatory code");
});