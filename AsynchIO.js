let fetchData1=()=>{
    let data1;
    setTimeout(()=>{
        data1="this is data from file 1";
        console.log(data1);
        
    },2000) // process is not waiting here
    return data1; // returning undefined before reading file
}
let fetchData2=()=>{
    let data2;
    setTimeout(()=>{
        data2="this is data from file 2";
        console.log(data2);
        
    },500)
    return data2;
}
const contents1=fetchData1();
console.log(contents1);
const contents2=fetchData2();
console.log(contents2);
