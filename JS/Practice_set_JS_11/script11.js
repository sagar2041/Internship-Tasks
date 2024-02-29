
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let function_output = document.getElementById("function_output");
let arrow_output = document.getElementById("arrow_output");


// function with fucntion keyword..
function countVowels(str){
  let count = 0;
  for (let val of str) {
      if (
        val === "a" ||
        val === "e" ||
        val === "i" ||
        val === "o" ||
        val === "u"
      ) {
        count++;
      }
    }
    return count;
}


// arrow function 

 let  arrowCountVowels = (str) => {
  let count = 0;

    for (let val of str) {
        if (
          val === "a" ||
          val === "e" ||
          val === "i" ||
          val === "o" ||
          val === "u"
        ) {
          count++;
        }
      }
      return count;
}

btn1.addEventListener('click', ()=>{
  let str = prompt("Enter a input for Normal fucntion"); 
  let count = countVowels(str);
  console.log(count);
  function_output.innerHTML = `${str} input contain ${count} Vowels`;
})

btn2.addEventListener('click', ()=>{
  let str = prompt("Enter a input for Arrow fucntion");
  let count = countVowels(str);
  console.log(count);
  arrow_output.innerHTML = `${str} input contain ${count} Vowels`;
})