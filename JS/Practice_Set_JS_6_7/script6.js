let fname = prompt("Enter your full Name (without space)");
let uName = document.querySelector("#uName");

let userName = '@'+fname+ fname.length;
console.log(userName);

uName.innerHTML = userName;