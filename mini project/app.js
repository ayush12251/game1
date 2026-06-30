let gameseq = [];
let userseq = [];
let squares=["red", "blue", "green", "yellow"];
let started = false;
let level = 0;
document.addEventListener("keypress", function() {
    if (!started) {
        started = true;
        level = 0;
       levelup();
    }
});
function levelup() {
    userseq = [];
    level++;
    document.querySelector("h2").textContent = `Level ${level}`;
    let randomnum = Math.floor(Math.random() * 4) + 1;
    randcolr = document.querySelector("#" + squares[randomnum-1]);
        gameseq.push(squares[randomnum-1]);
        // console.log("gameseq: ", gameseq);
    btnflash(randcolr);
}
   function btnflash(element) {
    element.classList.add("flash");
    setTimeout(function() {
        element.classList.remove("flash");
    },1000);
   }
   function userflash(element) {
    element.classList.add("userflash");
    setTimeout(function() {
        element.classList.remove("userflash");
    },200);
   }
   function check(ind) {
    if (gameseq[ind] == userseq[ind]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 2000);}}
    else{
         document.querySelector("body").style.backgroundColor = "red";
         setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
            document.querySelector("h2").textContent = `Game Over! your score was ${level - 1}. Press any key to restart`;
            gameseq = [];
            userseq = [];
            started = false;
            level = 0;
          
        }

   }
   function squareclick() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log("userseq: ", userseq);
    console.log("userseq length: ", userseq.length);
    let ind = userseq.length - 1;
    check(ind);
   }
   
   boxes = document.querySelectorAll(".square");
    for (box of boxes) {
        box.addEventListener("click", squareclick);}
