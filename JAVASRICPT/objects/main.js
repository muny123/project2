// block scope
{
    let x = "Asabeneh";
    console.log(x);
}
//functional scope
function letAsabene(){
    let a = "javascipt";
    console.log(a);
}
letAsabene();

// global scope
let day = "wednesday";
function letday(){
  console.log(day);
}
letday();
// EXAMPLES
let w ="javascript";
let g = "wednesday"
function myfunction(){
    let a = "Hello!"
    console.log(`${w} ${g}`);
    if(true){
        console.log(a);
        console.log(`${w} ${g}`);
    }
}
myfunction()
console.log(`${w} ${g}`);
  
//OBJECTS
const per ={} // declaring empty object
const person ={
    firstName : "Munirah",
    lastName : "Badru",
    age : 30,
    skils : ['html', 'css', 'javascript'],
    city : "Ilorin",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person);
console.log(person.fullName()); 


per.firstName = "Ibraheem";
per.lastName = "Sanusi"
per.age = 90;
per.city = "Oyo"
per.country = "Nigeria"
console.log(per);

// to copy new objects
const copyObject = Object.assign({},
    per);
 copyObject.state = "Kwara";
 copyObject.address = "13, GRA";
 console.log(copyObject);  

 // to print out keys we use (object.key) property 
 const keys = Object.keys(person);
 console.log(keys);

 // to print out values we use (object.value) property 
 const values = Object.values(person);
 console.log(values);
 // entries convert an object into an array
 const arraObj = Object.entries(person);
 console.log(arraObj);

 console.log(copyObject.firstName);


// hasownproperty to check if an element is include in the object
console.log(copyObject.hasOwnProperty("Munirah"));

//EXERCISE

 
