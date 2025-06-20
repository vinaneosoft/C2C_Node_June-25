let fetchData1=()=>{
    let data1;
    const promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data1="this is data from file 1";
            resolve(data1);
        },1000) 
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


async function fetch1(){
    /*synchronous */
   const data1=  await fetchData1();
   console.log(data1);
}
async function fetch2(){
    const data2= await fetchData2();
    console.log(data2);
}

/* asynchronous */
fetch1();
fetch2();