let btn = document.getElementById("btn");

let mode = "light";

btn.addEventListener("click", ()=>{
    if(mode === "light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        btn.innerHTML = "light";
    }
    else{
        mode ="light";
        document.querySelector("body").style.backgroundColor = "white";
        btn.innerHTML = "dark";
    }
    console.log(mode);
})


