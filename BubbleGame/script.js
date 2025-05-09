// let bubble = document.querySelector(".bubble");
let field = document.querySelector(".field");
let box3 = document.querySelector(".box3");
let box1 = document.querySelector(".box1");
let startingPage = document.querySelector(".startingPage");
let startbtn = document.querySelector(".startbtn");
let highestScore = document.querySelector(".highestScore");
let finalScore = document.querySelector(".score");
let bubbleHit = document.querySelector(".bubbleHit");
let time = document.querySelector(".time");
let title = document.querySelector(".title");
let box2 = document.querySelector(".box2");

let timer = 60;
let score = 0;
let hit = 1;

function createBubble() {
  let count = Math.floor(Math.random() * 10);
  let topPosition = Math.floor(Math.random() * 90);
  let leftPosition = Math.floor(Math.random() * 90);

  field.innerHTML = "";

  let bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = count;
  bubble.style.position = "absolute";
  bubble.style.top = `${topPosition}%`;
  bubble.style.left = `${leftPosition}%`;

  bubble.addEventListener("click", function(){
    score = score + count;
    box3.innerText = score
    box1.innerText =  hit++;
  
    createBubble()

  })
  field.appendChild(bubble)
}

createBubble();

function start(){
  startingPage.style.removeProperty("display")
  title.innerText = "Time Over"
  startbtn.innerText = "Restart"
  highestScore.innerText = `Highest Score: ${score}`
  finalScore.innerText = `Score: ${score}`
  bubbleHit.innerText = `Bubble Hit: ${hit-1}`
  time.innerText = `Time: 60 seconds`
  console.log("object")
  
}

startbtn.addEventListener("click", function(){
  startingPage.style.display = "none";
  // timer = 60;
  setTimeout(start, 60000);
  setInterval(t, 1000)
})

let t = function(){
    if(timer === 0){
      clearInterval()
      timer = 60;
    }else{
      timer--
      box2.innerText = timer
    }}