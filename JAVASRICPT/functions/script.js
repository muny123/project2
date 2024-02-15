  
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
    else if (bmiValue < 25 ){
        return "normalWeight";
    }
    else if (bmiValue <=29.9){
        return "overweight";
    }else{
        return "obese";
    }
 }
 console.log(BMI(50,100));

 //function sum 
 function multiplyEach(...args){
  console.log(args);
  const callback = (n) => n*n;
  let results = args.map((elem) => elem*elem)
  let result2 = args.map((elem)=> callback(elem));
  console.log(result2);
  return results;
 }
 console.log(multiplyEach(2,6,5,10,4,7));

 //map function
 const numbers =[2,6,5,10,4,7]
const manipulatedNumber = numbers.map((elem)=> Math.pow(elem,3))
console.log(numbers);
console.log(manipulatedNumber);

//filter function
function filters(){
    const result = [];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]<7){
            result.push(numbers[i])
        }
    }
    return result;
}
console.log(filters());

//every  and some method or function return boolean 
console.log(numbers.every((el)=> el < 10))
console.log(numbers.some((el) =>el < 10));
//find method returns first element that meets the condition
console.log(numbers.find((e) => e < 5));

// sort by default is alaphabetic order
const numtoSort = [10,8, 0, 26, 96, 10, 30]
console.log(numtoSort.sort((a, b)=>(a-b)));
console.log(numtoSort.sort((a, b)=>(b-a)));

// setInterval and settimeout

// setInterval(() => {
//     console.log("Javascript is a bay");
// }, 5000);

// setTimeout(() => {
//     console.log("One time action");
// }, 5000);

//DOM Manipulation
// console.log(document.getElementsByTagName("input"));
// const weight = document.getElementsByClassName(".weight")
// const height = document.getElementsByClassName(".height")
// const h1 = document.querySelector("h1")
// const button = document.getElementById("#button")

// button.addEventListener("click", () => { 
//     console.log("hi");
// });
 const obj = {
    value : "Hello"
 };
 function print(){
    console.log(this.value);
 }
 const boundPrint = print.bind(obj);
 boundPrint();
 
