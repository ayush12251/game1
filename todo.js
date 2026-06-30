list =[];
let str1 = prompt("Enter your request from 4 options: add, remove, display, quit");
while (str1 != "quit") {
    if (str1 == "add") {
        let itemToAdd = prompt("Enter the item to add:");
        list.push(itemToAdd);
        console.log(`${itemToAdd} has been added to the list.`);
    }
    else if (str1 == "remove") {
        let itemToRemove = prompt("Enter the index item to be removed:");

        list.splice(itemToRemove-1, 1);
    }
    else if (str1 == "display") {
        console.log("Current list items:");
        for (let i = 0; i < list.length; i++) {
            console.log(`${i + 1}. ${list[i]}`);
        }
    }
    else {
        console.log("Invalid option. Please try again.");
    }
    str1 = prompt("Enter your request from 4 options: add, remove, display, quit");
}