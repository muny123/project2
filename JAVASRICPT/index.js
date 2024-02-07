// console.log("hello world")
// let name = "Aishah";
// console.log(name);
// name = "RAhmah";
// console.log(name)

//     // percentage checkup
//  let age = 57;
//  let newAge = 13;
//  let percentage = (newAge/age);
//  console.log(percentage);
       

//  //trying datatypes
//  let myString = 'hi';
//  let otherString ="hello";
//  console.log(myString + " " + otherString);

//  let num = 0;
//  console.log(num);

//  let bol = true;
//  console.log(bol)

let string = "Javascript";
firstLetter = string[0]
console.log(firstLetter)
console.log(string.length)
console.log(string.length -1)
// console.log(string.indexOf[-1])
console.log(string.toUpperCase());
console.log(string.toLowerCase());

let text = "programming";
console.log(text.substring(3, 5))
console.log(text.substr(3, 5))
  

let day = "30 Days of Javascript";
console.log(day.split())
console.log(day.split(""))
console.log(day.includes("Days"))
console.log(day.includes("yer")) //includes gives answers in boolean//
console.log(day.includes("days"))


console.log(day.charAt())
let title = "javascript";
let lastIndex = title.length-1;
console.log(title.charAt(lastIndex))//charArt takes index and give the letter inside.
console.log(title.indexOf("a"))
console.log(title.replace("javascript", "Asabeneh"))
console.log(day.replace("Days", "months"))


//Assignment operators//

let numOne = 5;
let numTwo = 4;
let sum = numOne+numTwo;
let diff = numOne-numTwo;
let mult = numOne*numTwo;
let div = numOne / numTwo;
let remain = numOne % numTwo;
let powerOf = numOne**numTwo;

console.log(sum, diff, mult, div, remain, powerOf)


//Comparison Operators// it return boolean//
let first = 3;
let  second = 2;
console.log(first>second)
console.log(first<second)
console.log(first==second)
console.log(first===second)
console.log(first !== second)
console.log(first <= second)

//== and === comparison//
console.log("3" == 3)
console.log("3" === 3)

console.log(1 == true)
console.log(0 == true)
console.log(0 == false)
console.log(0 === false)

// logical operator//
let check = 4>3 && 10>5;
let see = 4>3  && 5>10;
console.log(check, see)

let compare = 4>3 || 10>5;
let value = 4>3 || 10 < 5;
let answer = 4<3|| 10<5;

console.log(compare, value, answer)
//true or true =true
//true or false = true
//false or false = false

let negate = !(4<3);
let result = !true;
console.log(negate, result)


//  increment and decrement operator
let count = 20;
console.log(++count)
console.log(count++)

let num = 20;
console.log(--num)
let can = 10;
can--;
console.log(can);


//Ternary Operator
let isMan = true;
isMan ? console.log("Yes, he is a man") :
console.log("No, he is not a man");


//symbol//
const sym = Symbol();
const newSym = ("Hi");
console.log(sym)
console.log(newSym)

//concatenation
const love ="i love";
 const sentense = love +" " + " "+ day;
 console.log(sentense)
//  let isaman = 3
//  isaman =5
//  const you = 7;
//  you = 9;

const backticsen = `${love} ${day}`;
console.log(backticsen);

const myArray =  ["Ruqoyyah", "Marvelous", "Ameenah", "Munirah"]
console.log(myArray);
myArray[0] = "Salamat"
console.log(myArray);
   

// math objects
const four = 4;
console.log(Math.sqrt(four));
console.log(Math.pow(four,2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random()+1);
console.log(Math.random()+1);
console.log(Math.random()+1);
console.log(Math.max(3,4,5,7,9,10));
// console.log(Math.floor(Math.random()*10 + 1));

let random = (Math.random()*10 + 1);
const click= random<=10 ?random :10;
console.log(click.toFixed(4));

//math.ceil is for promotion
//math.round it does the normal round up

 // Windows operator

  

























