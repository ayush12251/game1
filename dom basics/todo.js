// obj = document.querySelector("body");
// element=document.createElement("button");
// element.textContent="add item";
// list= document.querySelector("ul");
// obj.insertBefore(element, list);
// element.classList.add("add-btn");
// btn=document.querySelectors(".material-symbols-outlined");
// btn.onclick = function() {
//    delitem= prompt("Enter the item no to delete:");
//     lis = document.querySelectorAll("li");
//     if (delitem > 0 && delitem <= lis.length) {
//         list.removeChild(lis[delitem - 1]);
//     } else {
//         alert("Invalid item number.");
//     }
// }




// element.onclick = function() {
//     li= document.createElement("li");
//     li.textContent=prompt("Enter the item to add:");
//     list.appendChild(li);
  
  
   
// }
// function getRandomColor() {
//    let red = Math.floor(Math.random() * 256);
//    let green = Math.floor(Math.random() * 256);
//    let blue = Math.floor(Math.random() * 256);
//    return `rgb(${red}, ${green}, ${blue})`;
// }

// div = document.querySelector("#color-box");
// btn = document.querySelector("#generate-btn");
// btn.addEventListener("click", function() {
//     div.style.backgroundColor = getRandomColor();
//     h1 = document.querySelector("h1");
//     h1.innerText = `Generated Color: ${getRandomColor()}`;
// });
function color(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
btn = document.querySelector("#generate-btn");
btn.addEventListener("click", color);   
div = document.querySelector("#color-box");
div.addEventListener("click", color);