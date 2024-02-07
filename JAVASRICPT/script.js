//  let greet = "Hello!"
//  console.log(greet);
//   let name = prompt('Enter your name');
//   alert(`${name}`)

//   let fnumber = prompt("enter your number");
//   let senumber = prompt("enter your secondnumber");
// //   let resullt = +fnumber + +senumber;
//   let resullt =Number(fnumber) + Number(senumber)
//   console.log(resullt);

  // const agree = confirm('Are you sure you want to subscribe?')
  // console.log(agree); 

 let isAman =  true;
 if (isAman){
  console.log("Yes, he is a man ");
 }else{
  console.log("No, he is not a man ");
}

      //conditional statement
let b = 5
if (b<5) {
  console.log('Not correct');
} else if(b==5){
  console.log('It is correct');
}
else if(b>5){
console.log("It is wrong");
}
else{
  console.log("Try again");
}

let today = prompt('What day is today')
let dayy = today.toLocaleLowerCase()
switch(dayy){
  case('monday'):
  console.log("Today is monday");
  break
  case('tuesady'):
  console.log("Today is tuesday");
  break
  case('wednesday'):
  console.log("Today is wednesday");
  break
  case('thursday'):
  console.log("Today is thursday");
  break;
  case('friday'):
  console.log("Today is friday");
  break;
  default:
    console.log("it is not a day");
}

