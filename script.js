function computerSelection() {
  const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}


function playRound(playerSelection, computerChoice) {

  playerSelection = playerSelection.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerSelection === computerChoice) {
    return "its a tie!";
  }else if(
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ){
    return "you win!";
  }else{
    return "computer wins!";
  }
  } 
  


  while (true) { // Infinite loop
    let userChoice = prompt("Choose between Rock, Paper, Scissors (or type 'exit' to quit)").toLowerCase();
  
    if (userChoice === "exit") { // Allow the user to break out of the loop
      break;
    }
  
    const computerChoice = computerSelection();
    const result = playRound(userChoice, computerChoice);
    alert(result);
  }



