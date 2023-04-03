"use strict";

// ***OVERVIEW***
// This tool is going to be a network generator for Shadow of the Beanstalk.
// Version 1.0 is going to allow the GM to select a network type (building, remote site, apartment,
// small office, bar, etc.) select a size (large network, small network, etc.) and difficulty (how
// generally difficult the ICE protecting the nodes of the network will be)
// There's also going to be a network 'size' function that will determine how many nodes are on a
// network. That'll limit how much ice there is protection different parts of it, and the systems
// that are needed for the game can be 'stacked' behind systems already accessed. So if a player goes
// "I'm looking for the lights" but the tool didn't generate that part, you can say "oh it's behind this
// other system you already accessed lol", but it's going to be basic for now and can be expanded upon
// and refined for future versions of the tool
//
// I'm still learning the way running network encounters works in SotB, so this project may
// be a little wonky as I build it
//
/*
Steps I'm going to take:
1) Building the basic functionality of the program while I learn the net encounter rules
2) Put the basic functional pieces together so I can atleast randomly generate a network
3) Implement the UI
4) Put the UI and the program together so that the GM only has to use the webpage to generate the network
4) Touch up the UI
5) Balance the encounters
6) Use the program in my games

*/

//randomizes a number between 1 and 10
let i = Math.floor(Math.random() * 10 + 1);
console.log(i);
console.log("Begin Program:");

let difficultyLevel = 0;
let networkBaseLevel = 7;
let d = 0;
let builtNetwork = [];

let systems = [
  "Lights",
  "Emergency Lights",
  "HVAC",
  "Clean Water",
  "Sewage",
  "Grid Power",
  "Backup Power",
  "Fire Detection",
  "Fire Suppression",
  "Automatic Doors",
  "Security Doors",
  "Cameras",
  "Automated Turrets",
];

let basicIce = [
  "Fire Wall",
  "Great Wall",
  "Hadrian's Wall",
  "Ice Wall",
  "Heimdall 1.0",
  "Sentinel",
  "Authenticator",
];
let advancedIce = ["Archer", "Enigma", "Pop-up", "Syn 2.2", "Tollbooth"];
let extremeIce = ["Janus 1.0", "Shinobi", "Victor 2.0"];

//just testing to see if it can grab one of the items from the systems array
//console.log(systems[Math.floor(Math.random() * systems.length)]);
let j = Math.floor(Math.random() * systems.length);
console.log(j);
console.log(systems[j]);

//This is a temporary function that'll determine difficulty of network until I can
//  build the part of the tool that takes input from the user
function determineDifficulty() {
  difficultyLevel = Math.floor(Math.random() * 5 + 1);
  console.log("Difficulty level " + difficultyLevel);
  return difficultyLevel;
  // console.log("The difficulty of this networm is " + difficultyLevel);
}
// determineDifficulty();

//This is going to be the draft for the main function that will 'build' the network.
//  I'm probably going to rename it or split it into multiple functions or something
//  but that'll be seen after I work on it a bit
function buildNetwork() {
  determineDifficulty();
  determineNetworkSize();
}

function determineNetworkSize() {
  //This next part is just <6 for now, but will change once I have the details more ironed out
  if (difficultyLevel < 6) {
    d = Math.floor(Math.random() * networkBaseLevel + 1);
  }
  while (d > 1) {
    //basic iteration is done but I need to make it so it doesn't repeat selections, and so it
    //randomizes the number between 1 and 7 AND subtracts each time
    j = Math.floor(Math.random() * systems.length);
    console.log(systems[j]);
    builtNetwork.push(systems[j]);
    d = d - 1;
    console.log(builtNetwork);
  }
  console.log("D is " + d);
}

buildNetwork();

//next:
/*
1) List basic ICE
2) List Advanced ICE
3) List Extreme ICE (if there is any)

4) Create a slider mechanic from 1-5 that pulls from all 3 ICE lists based on the difficulty:
    ie. at 1, it randomly pulls from just Basic ICE, at 2 it pulls randomly from basic and HAS A CHANCE
    to pull from Advanced ICE, at 3 it pulls mostly from advanced and sometimes basic, at 4 it pulls from
    advanced and has a chance to pull from extreme, and at 5 it pulls mainly from extreme
*/
