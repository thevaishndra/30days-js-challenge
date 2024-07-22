//Dom Manipulation

//Selecting and manipulating elements
//select an html element by it's id and change it's text content
document.querySelector('#heading').innerHTML = "Title";

//select an html element by it's class and change it's bg-color
document.querySelector('.para').style.backgroundColor = "blue";

//Creating and appending elemnts
//create a new div element with some text content and append it to the body
let div = document.createElement("div")
div.innerHTML = "hello, hi";
document.body.appendChild(div);

//create a new li element and add it to an existing ul list
let li = document.createElement("li")
li.innerHTML = "fire";
document.querySelector("#list").appendChild(li);

//Removing Elements
//select an html element and remove it from dom
  document.querySelector("#text").remove();

 //remove the last child of specific HTML element
document.querySelector("#things").removeChild(things.lastElementChild);

//Modifying attributes and Classes
//select html element and change it's attribut eg url of img 
document.querySelector(".image").setAttribute('src', 'pillow.jpeg');

//add and remove css class to/from an html
document.querySelector("#things").classList.add("mystyle");
document.querySelector("#things").classList.remove("mystyle");

//Event handling 
//Add a click event listener to a button that changes the text content of paragraph
document.querySelector("#change-btn").addEventListener("click", () => {
document.querySelector("#change-text").innerHTML = "You are amazing, you can do it."
})

//add  a mouseover event listener to an element that changes its border color
document.querySelector("#change-btn").addEventListener("mouseover", () => {
    document.querySelector("#change-btn").style.border = "2px solid pink"
})
