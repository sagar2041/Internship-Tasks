let btn = document.getElementById("btn");
let givenArray = document.getElementById("givenArray");
let squareArray = document.getElementById("squareArray");

btn.addEventListener('click', ()=>{
    let userinput = prompt("Enter a Numbers");
    let inputArr = userinput.split(",").map(Number);
    let square =[];
    inputArr.forEach(val =>{
    square.push(val*val);  
    })
    console.log(square);
    givenArray.innerHTML = inputArr;
    squareArray.innerHTML = square;
})

