// Repetition logic with user input

while (true) {

    let number = prompt("Enter a number:");

    alert("Square of " + number + " is " + (number * number));

    let choice = prompt("Do you want to continue? (yes/no)");

    if (choice.toLowerCase() !== "yes") {
        alert("Exiting the program. Goodbye!");
        break;
    }
}
