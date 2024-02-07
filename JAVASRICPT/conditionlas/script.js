// console.log("hello world!!");

// let age = prompt("Enter your age");
// if(age >= 18){
//     alert("You are old enough to drive ")
// }else{
//     let ageLeft = 18 - Number(age)
//     alert(`You are left with ${ageLeft} to drive`);
// }

//ques4

//  const num = prompt("What number do you wish to know if its  even or not")

//  if(num%2 === 0){
//     alert(" Number is an even number ")
//  }else{
//     alert("Number is an odd number")
//  }

//  ARRAYYYYYYYYYSSSSS

const myFirstArray = Array(10).fill("students");
const anotherArray = ["Aisha", "Isah", "Rahmah","Ibraheem","Munirah", "Abdurrahman"];
const numArray =[1,2,3,4,5];
const mixedArray = [23, "you", "", "2+2"]
console.log(numArray);
console.log(myFirstArray);
console.log(anotherArray);
console.log(mixedArray);
console.log(anotherArray[0]);
console.log(anotherArray.length);
console.log(anotherArray.lastIndexOf("a"));
console.log(anotherArray.push("Basheerah"));
console.log(anotherArray);
console.log(anotherArray.unshift("Lawal"));
console.log(anotherArray.pop());
console.log(anotherArray);
console.log(anotherArray.reverse());
console.log(anotherArray.indexOf("Lawal"));
console.log(anotherArray);

// array concat
console.log(anotherArray.concat(numArray));
console.log(Array.isArray(anotherArray));
console.log(anotherArray.join(", "));
// anotherArray.splice(2). it will remove from array index 2 to the last array index.
// using splice alone cut out the indexes from the index you input
//splice takes 3 arguments
// console.log(anotherArray.splice(2,1,"Ameenah"));
console.log(anotherArray);

// slice 
console.log(anotherArray.slice()); // it is used to copy
// console.log(anotherArray.slice(1, 3)); // 
console.log(anotherArray.filter(" "));

















