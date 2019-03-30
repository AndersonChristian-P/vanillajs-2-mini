// Use README in conjunction with notes in this file to understand



document.querySelector("form").addEventListener("submit", addTodo); // when the submit button on the form is clicked run the addTodo function which creates a new li element and assigns the value (text)  of that li element to whatever was entered into the input field



function addTodo(event) {
  event.preventDefault();
  let item = document.createElement("li"); // gives us ability to create li elements
  item.innerText = document.getElementById("item").value; // set's each li element's text to be equal to whatever is typed in the input field
  item.addEventListener("click", completeTodo); // when a list element is clicked on run completeTodo which toggles aria-checked from true to false and vice versa

  let button = document.createElement("button"); // gives us ability to create a button element
  button.innerText = "x"; // set's each value of the button to 'x' this is what you'll see as text in the browser
  button.addEventListener("click", removeTodo); // when a button with a 'x' as its label is clicked the removeTodo function will run
  item.appendChild(button); // creates a child element of button under the li element

  let list = document.querySelector("ul"); // gives us access to the ul element
  list.appendChild(item); // creates a child element of li under the ul element
}

function removeTodo(event) {
  event.target.parentNode.remove();
}

function completeTodo(event) {
  let value = event.target.getAttribute("aria-checked");
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
} // using get and set attribute to change value of aria-checked

