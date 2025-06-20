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
    setTimeout(()=>{
        data2="this is data from file 2";
        console.log(data2);
        
    },500)
    return data2;
}
fetchData1().then((data)=>{
    console.log(data);
}, (errormessage)=>{
    console.log(errormessage);
});

fetchData2();

