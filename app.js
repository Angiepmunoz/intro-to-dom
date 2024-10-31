// Query selector
const body = document.querySelector("body");
console.log(body);

// updating the style
const h1 = document.querySelector("h1");
h1.style.color = "red";

// create new elements
const newH1 = document.createElement("h1");
newH1.innerText = "A new heading";

body.appendChild(newH1);

// event handlers
const divOne = document.querySelector(".one");

/*
divOne.addEventListener("click", ()=>{
    const colors = ["yellow", "blue", "red", "grey", "pink", "purple"];
    const pickColor = Math.floor(Math.random() * colors.length);
    divOne.style.backgroundColor = colors[pickColor];
})
*/

// event handler
function randomBackgroundColor() {
  const colors = ["yellow", "blue", "red", "grey", "pink", "purple"];
  const pickColor = Math.floor(Math.random() * colors.length);
  divOne.style.backgroundColor = colors[pickColor];
}

divOne.addEventListener("click", randomBackgroundColor)


const divTwo = document.querySelector(".two");

divTwo.addEventListener("click", ()=>{
    // const newHeigth = divT
    // console.log(typeof divTwo.style.height)
    divTwo.style.height = "150px"
})

const divThree = document.querySelector(".three");

divThree.addEventListener("click", ()=>{
    divThree.style.backgroundColor = "green";
})

const main = document.querySelector("main");

const divFour = document.querySelector(".four");

let count = 1

divFour.addEventListener("click", ()=>{
    const newDiv = document.createElement("div");
    newDiv.innerText = `new div #${count}!`;
    main.appendChild(newDiv)
    count++
})



