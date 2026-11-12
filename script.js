const moves = ["rock", "paper", "scissors"];
const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

const playerMove = (process.argv[2] || "").toLowerCase();

if (!moves.includes(playerMove)) {
  console.log("Usage: node rockPaperScissors.js <rock|paper|scissors>");
  process.exit(1);
}

const computerMove = moves[Math.floor(Math.random() * moves.length)];

let result;
if (playerMove === computerMove) {
  result = "It's a draw!";
} else if (beats[playerMove] === computerMove) {
  result = "You win!";
} else {
  result = "You lose!";
}

console.log(
  `You chose ${playerMove}. Computer chose ${computerMove}. ${result}`,
);
