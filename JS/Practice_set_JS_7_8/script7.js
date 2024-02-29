let even = document.querySelector("#even");
let table = document.querySelector("#table");

// print even number between 0-100
let number =[];
for(i=1;i<=100;i++){
    if(i%2==0){
        number.push(i);
        
    }
    even.innerHTML = number;
}

// print table 

let num = prompt("Enter  table number");
let tableNew = []
for(i=1;i<=10 ;i++){
    tableNew.push(i*num) ;
    table.innerHTML = tableNew;
}
