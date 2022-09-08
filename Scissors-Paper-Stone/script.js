var userName = "";
var gameCounter = 0;
var winCounter = 0;
var drawCounter = 0;

//Program to generate a choice
var getProgramChoice = function () {
  var choice = Math.floor(Math.random() * 3);
  var result = "";
  if (choice == 0) result = "stone";
  if (choice == 1) result = "scissors";
  if (choice == 2) result = "paper";
  return result;
};

//Returns true if input is valid
var inputValidator = function (input) {
  return input == "scissors" || input == "stone" || input == "paper";
};

//Display current game stats
var getScore = function () {
  var gameLoss = gameCounter - winCounter - drawCounter;
  return `Total game played: ${gameCounter}<br>
  Total game won: ${winCounter}<br>
  Total game draw: ${drawCounter}<br>
  Total game loss: ${gameLoss}`;
};

//Display Result to user
var getResult = function (outcome, input, programChoice) {
  //user lose
  if (outcome == "userlose") {
    gameCounter += 1;
    result =
      `The program chose ${programChoice}.<br> ${userName} chose ${input}.<br><br> You lose! Bummer. <br><br> Current Game Stats:<br>` +
      getScore();
  }
  //user win
  if (outcome == "userwin") {
    gameCounter += 1;
    winCounter += 1;
    result =
      `The program chose ${programChoice}.<br> ${userName} chose ${input}.<br><br> You win! Winner. <br><br> Current Game Stats:<br>` +
      getScore();
  }
  //user draw
  if (outcome == "draw") {
    gameCounter += 1;
    drawCounter += 1;
    result =
      `The program chose ${programChoice}.<br> ${userName} chose ${input}.<br><br> It's a Draw. <br><br> Current Game Stats:<br>` +
      getScore();
  }
  return result;
};

//Game Logic
var runGame = function (input) {
  var programChoice = getProgramChoice();
  if (input == programChoice) {
    output = getResult("draw", input, programChoice);
  }
  if (input == "scissors" && programChoice == "paper") {
    output = getResult("userwin", input, programChoice);
  }
  if (input == "scissors" && programChoice == "stone") {
    output = getResult("userlose", input, programChoice);
  }
  if (input == "paper" && programChoice == "scissors") {
    output = getResult("userlose", input, programChoice);
  }
  if (input == "paper" && programChoice == "stone") {
    output = getResult("userwin", input, programChoice);
  }
  if (input == "stone" && programChoice == "paper") {
    output = getResult("userlose", input, programChoice);
  }
  if (input == "stone" && programChoice == "scissors") {
    output = getResult("userwin", input, programChoice);
  }
  return output;
};

//Main Program
var main = function (input) {
  var output;
  //Checks if username exists
  if (userName == "") {
    userName = input;
    output = `Welcome to the game, ${userName} ! <br> Start the game by keying in either "paper", "scissors" or "stone" and submit`;
  } else {
    //Checks for valid game input
    if (inputValidator(input)) {
      output = runGame(input);
    } else {
      output = "Valid inputs are scissors, paper & stone only";
    }
  }
  return output;
};
