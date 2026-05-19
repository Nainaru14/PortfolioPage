const text=[
"Full Stack Developer",
"Java Developer",
"Software Engineer"
];

let count=0;
let index=0;
let current="";
let letter="";

(function typing(){

if(count===text.length){

count=0;

}

current=text[count];

letter=current.slice(0,++index);

document.getElementById("typing")
.innerHTML=letter;

if(letter.length===current.length){

count++;

index=0;

setTimeout(typing,1000);

}

else{

setTimeout(typing,100);

}

})();