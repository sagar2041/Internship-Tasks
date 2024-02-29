// Is the user's age greater than 18 ?

let age = prompt("Enter your age : ");
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

// Did the user input a valid email address ?

let useremail = prompt("Enter your Mail: ");
let email = "patilsagar1722@gmail.com";

if (useremail === email) {
  console.log("Email address is valid");
} else {
  console.log("Please Enter a valid Email Address");
}

// Is the temperature above 25 degrees Celsius ?

let temp = 30;

if (temp > 25) {
  console.log("Hot : ",temp);
} else {
  console.log("Cool : ",temp);
}

// Has the user entered a valid username and password ?

let username = "sagarpatil";
let password = "sagar123";

let newName = prompt("Enter a valid username: ");
let newPass = prompt("Enter a password: ");

if (newName == username && newPass == password) {
  console.log("Username and Password is Correct");
} else {
  console.log("Please enter a valid username and password!");
}

// Did the user select "Yes" as their answer ?

let ans = prompt(" Are you a registered ? (Yes/No): ");
if (ans == "Yes") {
  console.log("you can join the class");
} else if (ans == "No") {
  console.log("you can not join the class");
} else {
  console.log("Enter a valid choice");
}