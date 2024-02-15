// let randomId = "";
// let charList = "abcdefghijklmnopqrstuvwxyz0123456789";

// for(let i = 0; i<6; i++ ){
//     let randIndex = Math.floor(Math.random()*charList.length)
//     randomId += charList[randIndex]
// }
// console.log(randomId);

// LEVEL 1 
// 1  
let firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// 2 
let firstP = document.querySelector("#first");
let secondP = document.querySelector('#second');
let thirdP = document.querySelector('#third');
let fourthP = document.querySelector('#fourth');
console.log(firstP,secondP,thirdP, fourthP);

// 3 
let allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 4 
allParagraphs.forEach(x => console.log(x.textContent));

// 5 
fourthP.textContent = 'Fourth Paragraph';
console.log(fourthP.textContent);

// 6 set ID and CLASS 
// method 1 
allParagraphs.forEach(x => x.classList.add('paragraph'));

// method 2 
firstP.setAttribute('class', 'first-paragraph');
secondP.setAttribute('class', 'second-paragraph');

// method 3 
thirdP.className = 'third-paragraph';
fourthP.className = 'fourth-paragraph';



// LEVEL 2 
// 1 
allParagraphs.forEach(x => {
  x.style.color = 'red';
  x.style.backgroundColor = 'black';
  x.style.fontSize = '15px';
  x.style.fontFamily = 'Helvetica';
});

// 2 
let index = 0;
for (let each of allParagraphs) {
  if (index % 2 === 0)
    each.style.color = 'green';
  else each.style.color = 'red';
  index++;
}

// 3
let a = 0;
for (let each of allParagraphs) {
  if (a == 0) {
    each.textContent = `${a}st Pargraph!`;
  } else if (a === 1) {
    each.textContent = `${a}nd Paragraph`;
  } else if (a == 2) {
    each.textContent = `${a}rd Pargraphs`;
  } else
    each.textContent = `${a}th Paragraph!`;

  each.setAttribute('id', `${a}-paragraph`);
  each.setAttribute('class', 'Paragraph');
  a++;
}






