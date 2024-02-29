
function marksAvg() {

        // get marks from user
let marks = [];
let counter = 0;
while(counter < 6){
    
        marks[counter]  = prompt("Enter six subject  marks");     
        counter++;
     
}

// convert  string marks array to numbers

let newArray = [];
for(i=0; i<marks.length ; i++){
        newArray.push(parseInt(marks[i]))
}
console.log(newArray); 

// print the marks array in page using dom
arr = document.getElementById("arr");
arr.innerHTML = newArray;

// calculate the avg and sum of marks 
let sum = 0;
let avg = 0;
for(i = 0 ; i< newArray.length;i++){
  sum = sum + newArray[i];
  avg = sum/newArray.length;
}        
console.log("sum of array ", sum);
console.log("avg of array ", avg);

avgOfmarks = document.getElementById("avg");
avgOfmarks.innerHTML = avg;

}

let prices = [250,645,300,900,50];
let priceOf =[];
for(i = 0 ; i<prices.length ; i++){
        priceOf[i] = prices[i] - (prices[i]*0.1);
        
        console.log(priceOf);
}

let give = document.getElementById("giveArr");
give.innerHTML = prices;
let final = document.getElementById("finalArr");
final.innerHTML = priceOf;