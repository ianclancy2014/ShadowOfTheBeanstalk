"use strict";

/*
Notes:

---------------------------------Basic Features-------------------------

Randomly generate locations:

Warehouse
Military Base
Gang Hideout
Research Lab
Corpo Building
Seedy Bar

*************Have the option to select individual ones from the list, or have the ability to randomly
*************choose one of the DM wants to do that too.

1) Generate the location
2) Generate the floors
3) Generate the NPCs, items, and interactible objects on each floor
4) Generate a map of the location


Randomly generate characters:

1) Generate the Race
2) Generate the NPC name
3) Generate the NPC stats

Randomly generate encounters

1) Generate the encounter
2) Generate number of enemies, if any at all

Have a Genesys story dice dice handling system

Rather than creating a numbered dice system, have to create the Genesys dice system.

----------------------------Advanced Features------------------------------


Randomly generate sidequests

1) Generate the event/questgiver that triggers the quest beginning
2) Generate the objective
3) Generate the enemies involved

*********The sidequest generator will probably have to be created before I create the campaign
*********generator. I'm not too sure, but it's possible the campaign generator could be easier
*********if I just keep it simple, and the sidequest one could be more in depth with the
*********details. The campaign one could just generate a birds-eye-view of the campaign
*********and let the DM create the details on their own or using this tool

Randomly Generate Campaigns

1) Generate an objective
2) Generate the 'enemies' (who the players will have to take on, not the NPC generation itself. That will be a different mechanic)
3) Generate the win condition


*/

//***********This is the DICE MECHANIC********************************

const boost = [1, 2, 3, 4, 5, 6];
const setback = [1, 2, 3, 4, 5, 6];
const ability = [1, 2, 3, 4, 5, 6, 7, 8];
const difficulty = [1, 2, 3, 4, 5, 6, 7, 8];
const proficiency = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const challenge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// console.log(boost[Math.floor(Math.random() * boost.length)]);

let success = 0;
let advantage = 0;
let triumph = 0;
let despair = 0;

function boostDice() {
  let i = boost[Math.floor(Math.random() * boost.length)];
  console.log(i);
  switch (i) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      success++;
      break;
    case 4:
      success++;
      advantage++;
      break;
    case 5:
      advantage++;
      advantage++;
      break;
    case 6:
      advantage++;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function setbackDice() {
  let i = setback[Math.floor(Math.random() * setback.length)];
  console.log(i);
  switch (setback[i]) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      success--;
      break;
    case 4:
      success--;
      break;
    case 5:
      advantage--;
      break;
    case 6:
      advantage--;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function abilityDice() {
  let i = ability[Math.floor(Math.random() * ability.length)];
  console.log(i);
  switch (ability[i]) {
    case 1:
      break;
    case 2:
      success++;
      break;
    case 3:
      success++;
      break;
    case 4:
      success++;
      success++;
      break;
    case 5:
      advantage++;
      break;
    case 6:
      advantage++;
      break;
    case 7:
      success++;
      advantage++;
      break;
    case 8:
      advantage++;
      advantage++;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function difficultyDice() {
  let i = difficulty[Math.floor(Math.random() * difficulty.length)];
  console.log(i);
  switch (difficulty[i]) {
    case 1:
      break;
    case 2:
      success--;
      break;
    case 3:
      success--;
      success--;
      break;
    case 4:
      advantage--;
      break;
    case 5:
      advantage--;
      break;
    case 6:
      advantage--;
      break;
    case 7:
      advantage--;
      advantage--;
      break;
    case 8:
      success--;
      advantage--;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function proficiencyDice() {
  let i = proficiency[Math.floor(Math.random() * proficiency.length)];
  console.log(i);
  switch (proficiency[i]) {
    case 1:
      break;
    case 2:
      success++;
      break;
    case 3:
      success++;
      break;
    case 4:
      success++;
      success++;
      break;
    case 5:
      success++;
      success++;
      break;
    case 6:
      advantage++;
      break;
    case 7:
      success++;
      advantage++;
      break;
    case 8:
      success++;
      advantage++;
      break;
    case 9:
      success++;
      advantage++;
      break;
    case 10:
      advantage++;
      advantage++;
      break;
    case 11:
      advantage++;
      advantage++;
      break;
    case 12:
      triumph++;
      success++;
      break;
  }
  console.log(success, advantage, triumph);
  return success, advantage, triumph;
}

function challengeDice() {
  let i = challenge[Math.floor(Math.random() * challenge.length)];
  console.log(i);
  switch (proficiency[i]) {
    case 1:
      break;
    case 2:
      success--;
      break;
    case 3:
      success--;
      break;
    case 4:
      success--;
      success--;
      break;
    case 5:
      success--;
      success--;
      break;
    case 6:
      advantage--;
      break;
    case 7:
      advantage--;
      break;
    case 8:
      success--;
      advantage--;
      break;
    case 9:
      success--;
      advantage--;
      break;
    case 10:
      advantage--;
      advantage--;
      break;
    case 11:
      advantage--;
      advantage--;
      break;
    case 12:
      despair++;
      success--;
      break;
  }
  console.log(success, advantage, triumph);
  return success, advantage, despair;
}

/* ****************This is the part where I create the mechanic to grab
the function and make it add the dice for how many times it's been clicked,
then returns the results of the pool */

//These are where the number of times the dice have been rolled will go
let boostNumber = 1;
let setbackNumber = 1;
let abilityNumber = 1;
let difficultyNumber = 1;
let proficiencyNumber = 1;
let challengeNumber = 1;

document
  .querySelector(".boostDiceButton")
  .addEventListener("click", function () {
    boostDice();
    document.querySelector(".boostDiceOutput").textContent = boostNumber++;
  });

document
  .querySelector(".setbackDiceButton")
  .addEventListener("click", function () {
    setbackDice();
    document.querySelector(".setbackDiceOutput").textContent = setbackNumber++;
  });

document
  .querySelector(".abilityDiceButton")
  .addEventListener("click", function () {
    abilityDice();
    document.querySelector(".abilityDiceOutput").textContent = abilityNumber++;
  });

document
  .querySelector(".difficultyDiceButton")
  .addEventListener("click", function () {
    difficultyDice();
    document.querySelector(".difficultyDiceOutput").textContent =
      difficultyNumber++;
  });

//the ROLL button *********************
document
  .querySelector(".diceResultsButton")
  .addEventListener("click", function () {
    document.querySelector(".diceResultsOutput").textContent =
      "Success: " + success + " - Advantage: " + advantage;
  });

//the RESET button *********************
document
  .querySelector(".diceResetButton")
  .addEventListener("click", function () {
    boostNumber = 1;
    setbackNumber = 1;
    abilityNumber = 1;
    difficultyNumber = 1;
    proficiencyNumber = 1;
    challengeNumber = 1;
    document.querySelector(".boostDiceOutput").textContent = 0;
    document.querySelector(".setbackDiceOutput").textContent = 0;
    document.querySelector(".abilityDiceOutput").textContent = 0;
    document.querySelector(".difficultyDiceOutput").textContent = 0;
    document.querySelector(".diceResultsOutput").textContent = "???";
    success = 0;
    advantage = 0;
    triumph = 0;
    despair = 0;
  });
