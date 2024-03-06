// Append text

let heading = document.getElementById("heading");
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    heading.innerHTML = "Parsh infotech students!";
})

// divs task
let btn1 = document.getElementById("btn1")
let boxInfo = document.querySelectorAll(".box")

btn1.addEventListener("click",()=>{
     boxInfo[0].innerHTML = "Hello Javascript";
    boxInfo[1].innerHTML = "Paarsh Infotech";
    boxInfo[2].innerHTML = "Apna College";
})
