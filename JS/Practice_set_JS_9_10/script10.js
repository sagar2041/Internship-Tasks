let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

// remove first company
companies.shift(1);
console.log(companies);

// remove uber and add ola in its place
companies.splice(1,1,"ola");
console.log(companies);

// add amazone at the end

companies.push("Amazone");
console.log(companies);
