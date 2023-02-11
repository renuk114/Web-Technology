//console.log("Hello world i'm learning JavaScript!!");
/*let a=6;
let b=7;
let sum=a+b;
console.log(sum);

var a=6;
var b=7;
var multiple = a*b;
console.log("The multiple of two mumbers is: " + multiple);

const PI = 3.14;
let radius= window.prompt("Enter radius: ");
let circumference = 2 * PI * radius
console.log("The circumference of a circle is: " + circumference); 

function bark(){
    console.log("The dog is barking")
}
let age = window.prompt("Enter the age of dog: ")
if (age>=10){
console.log("The dog is very old.")
}
else{
    console.log("The dog is very young.")
}
bark(); */
document.getElementById("myBtn").onclick = function() {
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const PI= 3.14;
    let circumference = 2 * PI * radius;
    //document.getElementById("circumference").innerHTML= circumference;
    document.getElementById("circumference").append(circumference);
    alert("Hello CG4 and CG10")
}