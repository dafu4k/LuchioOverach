"use strict"

/*const circles = document.querySelectorAll(".circle");

circles.forEach(function(item,id){
    circles[id].style.cssText = "background: pink";
});

for (let i = 0; i < circles.length; i++){
    circles[i].style.background= "pink";
}
*/
const b = document.createElement("div");
b.classList.add("black");
 

const a = document.querySelectorAll(".heart");
a[1].before(b);

document.querySelector(".black").innerHTML = "<h1>fewfewfwe</h1>";
