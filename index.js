const btn = document.getElementById("btn");
const subtractBtn = document.getElementById("subtractBtn");
const addBtn = document.getElementById("addBtn");




addBtn.addEventListener("click", addFunction);

function addFunction(){
    if(btn.innerHTML == 100){
        alert("Number cannot count above 100");
    }else {
        btn.innerHTML++
    }
}

subtractBtn.addEventListener("click", subtractFunction);

function subtractFunction(){
    if(btn.innerHTML == 0){
        alert("Number cannot count below 0");
    }else {
        btn.innerHTML--
    }
}




