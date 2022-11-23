var count = 0;
var h1El = document.createElement("h1");
var li = document.createElement("li")
var quizQs = document.createElement("div")
var quizQsInput = document.querySelector("#quizQs-text");
var quizQsForm = document.querySelector("#quizQs-form");
var quizQsList = document.querySelector("#quizQs-list");
var quizQsCountSpan = document.querySelector("#quizQs-count");

var quizQs = [];

h1El.textContent = "Coding Quiz!";

// The following function renders items in a todo list as <li> elements
function renderquizQs() {
  // Clear todoList element and update todoCountSpan
  quizQsList.innerHTML = "";
  quizQsCountSpan.textContent = quizQs.length;

  // Render a new li for each todo
  for (var i = 0; i < quizQs.length; i++) {
    var quizQs = quizQs[i];

    var li = document.createElement("li");
    li.textContent = quizQs;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    quizQsList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("quizQs"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedquizQs !== null) {
    quizQs = storedquizQs;
  }

  // This is a helper function that will render todos to the DOM
  renderquizQs();
}

function storequizQs() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("quizQs", JSON.stringify(quizQs));
}

// Add submit event to form
quizQsForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var quizQsText = quizQsnput.value.trim();

  // Return from function early if submitted todoText is blank
  if (quizQsText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  quizQs.push(quizQsText);
  quizQsInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeQuizQs();
  renderQuizQs();
});

// Add click event to todoList element
quizQsList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    quizQs.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeQuizQs();
    renderQuizQs();
  }
});

// Calls init to retrieve data and render it to the page on load
init()



// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

