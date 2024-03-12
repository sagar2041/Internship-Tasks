class user {
   constructor(name,email){
    this.name = name;
    this.email = email;
   }
    viewData() {
        console.log(" website  data! ");
    };  
}

let stud1 = new user("sagar","patilsagar@gmail.com");

let teacher = new user("xyz","xyz@gmail.com");



class admin extends user {
    editData() {
        console.log("edited website data !");
    }
    
}

let person = new admin()

person.editData();
