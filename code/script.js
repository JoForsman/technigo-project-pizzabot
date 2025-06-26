// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("What is you name?");

alert(
  `Hello ${userName}. Happy to see you here!`
)

// Step 2 - Food choice
// Your code goes here
let order = prompt("What would you like to eat today?\n\nToday we serve:\n1. Pizza\n2. Pasta\n3. Salad\n\nPlease enter a number to order!")

let foodChoice;

if (order === "1") {
  foodChoice = "pizza";
}
else if (order === "2") {
  foodChoice = "pasta";
}

else if (order === "3") {
  foodChoice = "salad";
}

else {
  foodChoice = prompt("Please enter a number between 1 and 3 to order.\n1. Pizza\n2. Pasta\n3. Salad")
}

alert(`So you're in the mood for ${foodChoice} today? Great choice!`
)

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
