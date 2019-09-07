let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerChoice()
{
  const choices=['r','p','s'];
  const randomnumber=Math.floor(Math.random()*3);
  return choices[randomnumber];
}
function convertToWord(letter){
	if(letter==="r") return "Rock";
	if(letter==="p") return "Paper";
	return "Scissors";
}

function win(userChoice,computerChoice)
{

const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const userChoice_div=document.getElementById(userChoice);
userScore++;
userScore_span.innerHTML=userScore;
result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord}   beats   ${convertToWord(computerChoice)}${smallCompWord}   you win!!! `;
userChoice_div.classList.add('green-glow');
setTimeout(()=>userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice,computerChoice)
{

const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const userChoice_div=document.getElementById(userChoice);
computerScore++;
computerScore_span.innerHTML=computerScore;
result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord}   loses to   ${convertToWord(computerChoice)}${smallCompWord}   you loose!!! `;
userChoice_div.classList.add('red-glow');
setTimeout(()=> userChoice_div.classList.remove('red-glow'),300);
}
function draw(userChoice,computerChoice)
{

const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const userChoice_div=document.getElementById(userChoice);
result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord}   equals   ${convertToWord(computerChoice)}${smallCompWord}   DRAW!!! `;	
userChoice_div.classList.add('gray-glow');
setTimeout(()=>userChoice_div.classList.remove('gray-glow'),300);
}

function game(userChoice)
{
  const computerChoice=getcomputerChoice();
  switch(userChoice+computerChoice){
  	case "rs":
  	case "pr":
  	case "sp":
  	  win(userChoice,computerChoice);
  	 break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice,computerChoice);
     break; 
    
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
     break;  
  }

}


function main(){
  rock_div.addEventListener('click',function(){
	console.log("hey you clicked on rock");
	game("r");
  }) 
  paper_div.addEventListener('click',function(){
	console.log("hey you clicked on paper");
	game("p");
  }) 
  scissor_div.addEventListener('click',function(){
	console.log("hey you clicked on scissor");
	game("s");
  }) 
}

main();