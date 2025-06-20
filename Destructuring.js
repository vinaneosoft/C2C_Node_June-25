
const person={
    pname:'hari',
    age:2,
    addharid:6767678
}
console.log(person.pname);
//store person name in another variable name

let nname=person.pname;
console.log(nname);
nname="pari"

//let age=person.age

let {age,pname} =person
console.log(pname);
console.log(age);
function acceptName({pname}){
    console.log(pname);
}
acceptName(person)

let {age:personage, pname:personname}=person;
console.log(personage);
console.log(personname);

let b=78;
let a=b;
console.log(a);
a=67;



let employeenames=["hari",'pooja','kiran','madhu'];
let name1=employeenames[0];
let name2=employeenames[1];

let [n1,n2]=employeenames;
console.log(n1);
console.log(n2);

[n1,,n2]=employeenames;
console.log(n1);
console.log(n2);




