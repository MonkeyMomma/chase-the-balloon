//code to set game canvas


//Variables to store score and balloon speed
var score=0, speed=1;

//functions to set element coordinates
function setLeft(id,x){
  document.getElementById(id).style.left=x+"px";
}
function setTop(id,y){
  document.getElementById(id).style.top=y+"px";
}

//functions to get element coordinates
function getLeft(id){
  return document.getElementById(id).offsetLeft;
}
function getTop(id){
  return document.getElementById(id).offsetTop;
}

//function to return a random number
function randomNumber(low,high){
  return (Math.floor(low+ Math.random()*(1+high-low)));
}

//Sets timer to run function floatUp every 25 milliseconds
var gameTimer=window.setInterval(floatUp, 25);

function floatUp() {
  var y=getTop("balloon");
  if (y<-100){
    gameOver();
  }
  setTop("balloon", y-speed);
}

function popped(){
  score++;
  speed++;
  document.getElementById("scoreText").innerText="Score: "+score;
  setLeft("balloon", randomNumber(0, window.innerWidth-100));
  setTop("balloon", window.innerHeight);
}

function gameOver(){
  clearInterval(gameTimer);
  alert("Game Over! You saved "+ score+ " Sea Turtles!");
  location.reload();
}
