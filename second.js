"use strict";
/*
ES 6
Условия
(da !== 10) ? console.log("Не равен") : console.log("Равен");

Функций
const a = (a, b) => a+b;
console.log(a(5,5));
*/

/*const a = prompt("Андрей хуй","");


const b = a.indexOf(" ");
const c = a.length;

console.log(a.slice(b+1,c+1));




function kavo() {

}


const tavo = function(){

};

const da = (a,b) => a+b;

console.log(da(2,2));



if (a>b){

} else if(a<b || a == 0){

}

(a==b) ? console.log(a) : console.log(b);


switch (a){
    case 8 :
}


while (i>b){

}


for (let net = 1; net != 4; net++){
    
}
*/






/*for (let key in obj){
    if (typeof(obj[key]) === "object"){
        for (let i in obj[key]){
            console.log(`Це уже объекст с ключём ${i} и значением ${obj[key][i]}`);
        }
    } else{
        console.log(`Это свойство имеет ключ под названием ${key} и значение в нём - ${obj[key]}`);
    }
}
*/

/*const array = [4, 5, 6, 7, 8];

array.forEach(function(a, b){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
});*/

/*let a = prompt("", "");
a = a.split(",") || a.split(", ") || a.split("; "); // Из а получаем что-то

function da(){
   for (let value of a){
       if (typeof(value) === "int"){
           a.sort(Num);
       } else{
           a.sort();
       }
   }
   return a;
}
da();
console.log(a);
function Num(a,b){
    return a - b;
} 
*/

const obj = {
    a:10,
    b:5
};



function objCopy(mainObj){
    let objCopy = {};
    
    for(let key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

console.log(obj);
console.log(objCopy(obj));

const ce = ["ауц", "хуюч"];
const ec = [...ce];

ec[1] = "нет";
console.log(ce);
console.log(ec);

 

