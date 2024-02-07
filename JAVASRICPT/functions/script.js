  
function fullName(){
    console.log("Munira Badaru-Sanusi");
}
fullName();
function name(lastName, firstName, school="webfala"){
console.log(`${lastName} ${firstName} ${school}`);
}
name("Badru", "Munirah");

function sum(a, b){
return a+b
}
sum(5,5)
let by2 = sum(5,5);
console.log(by2);
console.log(sum(10 + 5));

//Arrow function
const multiplication = () => {
   console.log(12*12);
};
multiplication();
// arrow function without return attributes
const multiply = (a,b) => a*b;
console.log(multiply(5,5));


// condition and loops with functions
 function BMI(w, h){
    const bmiValue = w/(h*h);
    // return bmiValue;
    if(bmiValue<18.5){
        return "underweight";
    }
    else if (bmiValue ==18.5 || bmiValue < 25 ){
        return "normalWeight";
    }
    else if (bmiValue ==25 || bmiValue>29.9){
        return "overweight";
    }else{
        return "obese";
    }
 }
 console.log(BMI(50,100));
