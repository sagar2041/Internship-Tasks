// grade of students

let marks = prompt("Enter Student Marks (0-100)");

if(marks >= 80 && marks <= 100){
    console.log("A Grade");
}
else if(marks >= 70 && marks <=79){
    console.log("B Grade");
}
else if(marks >= 60 && marks <= 69){
    console.log("C Grade");
}
else if(marks >=50 && marks <= 59){
    console.log("D Grade");
}
else if(marks >= 0 && marks <= 49){
    console.log("Fail!");
}
else{
    console.log("Enter valid Marks !");
}

