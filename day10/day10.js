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
 //add a submit event listener to a form that prevents the default submissionand logs the data to console
 //add a change event listener to a select dropdown that displays the selected value in a paragraph

 //Event Delagation
 //add a click event listener to a list that logs the text content of the clicked list item using event delegation
 //add a event listener to a parent element that listens for events from dynamically added child elements 