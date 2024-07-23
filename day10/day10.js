//Event Handling

//Basic event handling
//add a click event listener to a button that changes text of paragraph
document.querySelector(".change-btn").addEventListener("click", () => {
    document.querySelector(".change-text").innerHTML = "Meherbani nahi tumhara pyar maanga hai, Tumhe manzoor hai tabhi to yaar manga hai."
});

//add a double click event-listener to an image that toggles it's visibility
document.querySelector(".image").addEventListener("dblclick", () => {
    document.querySelector(".image").style.display = "none";
})

//Mouse events
//add a mouseover event listener to an element that changes its background color
document.querySelector(".heading").addEventListener("mouseover", () => {
    document.querySelector(".heading").style.backgroundColor = "#15ff00";
})

//add mouseout event listener to an element that resets it's background color
document.querySelector(".heading").addEventListener("mouseout", () => {
    document.querySelector(".heading").style.backgroundColor = "yellow";
})

//Keyboard events
//add a keydown input event listener to an input field that logs the key pressed to console
document.querySelector(".input").addEventListener("keydown", () => {
    console.log(`key pressed`);
})
//add a keyup event listener to an input field that displays the current value in a paragraph 
 const input = document.querySelector(".input");
 const displayPara = document.querySelector(".para")
 input.addEventListener("keyup", () => {
     displayPara.textContent = input.value;
 });

 //Form Events
 //add a submit event listener to a form that prevents the default submission and logs the data to console
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

 //add a change event listener to a select dropdown that displays the selected value in a paragraph
const select = document.querySelector(".dropdown");
const displayValue = document.querySelector(".display");

select.addEventListener("change", () => {
    const selectedValue = select.value;
    displayValue.textContent = `Selected value: ${selectedValue}`;
});

 //Event Delagation
 //add a click event listener to a list that logs the text content of the clicked list item using event delegation
 const selectedItem = document.querySelector(".list");
 selectedItem.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI"){
    console.log(`Selected item: ${event.target.textContent}`);
}
 });

 //add a event listener to a parent element that listens for events from dynamically added child elements 
 const addItemButton = document.querySelector(".addItemButton");
 const itemList = document.querySelector(".itemList");

 const addItem = () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item: ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
 }
 addItemButton.addEventListener("click", addItem);

 itemList.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI") {
      console.log(`Clicked item: ${event.target.textContent}`);
    }
});
