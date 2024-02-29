let btn1 = document.getElementById("btn1");
let marksArray = document.getElementById("marksArray");
let toppers = document.getElementById("toppers");

btn1.addEventListener("click", () => {
  let userInput = prompt("Enter a student marks");
  let input = userInput.split(",").map(Number);

  console.log(input);
  marksArray.innerHTML = input;

  let topper = input.filter((val) => {
    return val > 90;
  });
  console.log(topper);
  toppers.innerHTML = topper;
});

let btn2 = document.getElementById("btn2");
let arr = document.getElementById("arr");
let sum = document.getElementById("sum");
let product = document.getElementById("product");

btn2.addEventListener("click", () => {
  let number = prompt("Enter a Number");

  let array = [];

  for (i = 1; i <= number; i++) {
    array.push(i);
  }
  console.log(array);
  arr.innerHTML = array;

  let sumOfArray = array.reduce((prev, curr) => {
    return prev + curr;
  });
  console.log("Sum of array numbers", sumOfArray);
  sum.innerHTML = sumOfArray;

  let productofArray = array.reduce((prev, curr) => {
    return prev * curr;
  });
  console.log("Product of array numbers", productofArray);
  product.innerHTML = productofArray;
});
