const roles=[

"Full Stack Developer",

"Java Developer",

"Software Engineer"

];

let i=0;
let j=0;
let current="";

function typing(){

if(i<roles.length){

current=roles[i];

document.getElementById(
"typing"

).innerHTML=

current.slice(0,j++);

if(j<=current.length){

setTimeout(typing,100);

}

else{

j=0;
i++;

setTimeout(typing,1000);

}

}

else{

i=0;

typing();

}

}

typing();



function showProject(project){

const title=
document.getElementById(
"title"
);

const details=
document.getElementById(
"details"
);

if(project==="sales"){

title.innerHTML=
"Sales Savvy";

details.innerHTML=`

Tech:
Java, Spring Boot, JWT,
Razorpay, REST APIs

Features:

• Authentication

• Product Catalog

• Cart Service

• Order Management

• Payment Gateway

`;

}


if(project==="task"){

title.innerHTML=
"Task Buddy";

details.innerHTML=`

Tech:

React JS, JavaScript

Features:

• CRUD

• React Hooks

• Dynamic UI

`;

}


if(project==="door"){

title.innerHTML=
"Automatic Door Lock";

details.innerHTML=`
Arduino-based
security automation system
using sensors and servo motor.
`;

}


if(project==="vlsi"){

title.innerHTML=
"Carry Select Adder";

details.innerHTML=`
Reduced area, delay,
and power consumption
using XOR optimization.
`;

}


document.getElementById(
"modal"
).style.display="flex";

}


function closeModal(){

document.getElementById(
"modal"
).style.display="none";

}
