const btn = document.querySelector("#btn");

let i = 0;
const fnc = function (e){
    e.target.textContent = console.log(++i);
    if (i == 2){
        btn.removeEventListener("click",fnc);
        console.log("конэц");
    }
};

btn.addEventListener("click", fnc);

