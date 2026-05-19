const roles=[
"Full Stack Developer",
"Java Developer",
"Software Engineer"
];

let i=0;
let j=0;

function type(){

let current=roles[i];

document.getElementById(
"typing"
).innerHTML=

current.slice(0,j++);

if(j>current.length){

j=0;

i++;

if(i>=roles.length){

i=0;

}

}

setTimeout(type,120);

}

type();
