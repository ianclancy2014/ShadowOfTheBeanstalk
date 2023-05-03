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
// let i = Math.floor(Math.random() * 10 + 1);
// console.log(i);
console.log("Begin Program:");

let difficultyLevel = 0;
let networkSize = 0;
let d = 0;
let builtNetwork = [];
let builtICE = [];
let insideList = true;

//hopefully temp variables
let tempDifficultyLevel = 0;

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

let j = Math.floor(Math.random() * systems.length);
let b = systems[j];

//This is a temporary function that'll determine difficulty of network until I can
//  build the part of the tool that takes input from the user
// function determineDifficulty() {
//   difficultyLevel = Math.floor(Math.random() * 5 + 1);
//   console.log("Difficulty level " + difficultyLevel);
//   return difficultyLevel;
//   // console.log("The difficulty of this networm is " + difficultyLevel);
// }

//This function iterates through the built network Array
function iterator() {
  for (let item of builtNetwork) {
    if (item == b) {
      insideList = false;
    } else {
      continue;
    }
  }
}

//This function builds the Network
//It will eventually just be a calling the determinSize and determineDifficulty functions
function buildNetwork() {
  tempNetworkSize = networkSize;

  determinSize();
  console.log(builtNetwork);
  // buildICE();
  // console.log("ICE Encountered: " + builtICE);
  determineDifficulty();
}

// function buildICE() {
//   let z = Math.floor(Math.random() * basicIce.length);
//   while (builtICE.length < builtNetwork.length) {
//     console.log("Building ICE");
//     z = Math.floor(Math.random() * basicIce.length);
//     builtICE.push(basicIce[z]);
//   }
// }

//This will be the prototype for the 2 different selectors: the size and difficulty

let tempNetworkSize = 4; //THis will be changed to the value that the user selects for size
// let tempDifficultyLevel = 5; //This will be changed to the value selected for difficulty
let tempBuiltICE = []; //This will be changed to the builtICE array

function determinSize() {
  while (networkSize > 0) {
    b = systems[j];
    iterator();
    if (insideList == true) {
      builtNetwork.push(systems[j]);
    } else {
      networkSize = networkSize + 1;
    }
    insideList = true;
    j = Math.floor(Math.random() * systems.length);
    networkSize = networkSize - 1;
  }
}

function determineDifficulty() {
  let baseICEValues = [];
  while (baseICEValues.length < tempNetworkSize) {
    let z = Math.floor(Math.random() * difficultyLevel + 1);
    baseICEValues.push(z);
  }
  for (let item of baseICEValues) {
    let m = 0;
    let n = 0;
    switch (item) {
      case 1:
        console.log("Difficulty 1!");
        n = Math.floor(Math.random() * basicIce.length);
        tempBuiltICE.push(basicIce[n]);
        console.log("Basic ICE");
        break;
      case 2:
        console.log("Difficulty 2!");
        //thinking of doing 60/40 split for this one from basic and medium
        m = Math.floor(Math.random() * 100);
        if (m <= 60) {
          n = Math.floor(Math.random() * basicIce.length);
          tempBuiltICE.push(basicIce[n]);
          console.log("Basic ICE");
        } else if (m > 60) {
          n = Math.floor(Math.random() * advancedIce.length);
          tempBuiltICE.push(advancedIce[n]);
          console.warn("Advanced ICE");
        }
        break;
      case 3:
        console.log("Difficulty 3!");
        //Doing a 40/60 split in favor of advanced ICE
        m = Math.floor(Math.random() * 100);
        if (m <= 60) {
          n = Math.floor(Math.random() * advancedIce.length);
          tempBuiltICE.push(advancedIce[n]);
          console.warn("Advanced ICE");
        } else if (m > 60) {
          n = Math.floor(Math.random() * basicIce.length);
          tempBuiltICE.push(basicIce[n]);
          console.log("Basic ICE");
        }
        break;
      case 4:
        console.log("Difficulty 4!");
        //20/70/10 split with basic/advanced/extreme but might fine tune this amount
        m = Math.floor(Math.random() * 100);
        if (m <= 20) {
          n = Math.floor(Math.random() * basicIce.length);
          tempBuiltICE.push(basicIce[n]);
          console.log("Basic ICE");
        } else if (m > 20 && m <= 90) {
          n = Math.floor(Math.random() * advancedIce.length);
          tempBuiltICE.push(advancedIce[n]);
          console.warn("Advanced ICE");
        } else if (m > 90) {
          n = Math.floor(Math.random() * extremeIce.length);
          tempBuiltICE.push(extremeIce[n]);
          console.error("Extreme ICE");
        }
        break;
      case 5:
        console.log("Difficulty 5!");
        //10/60/30 split
        m = Math.floor(Math.random() * 100);
        if (m <= 10) {
          n = Math.floor(Math.random() * basicIce.length);
          tempBuiltICE.push(basicIce[n]);
          console.log("Basic ICE");
        } else if (m > 10 && m <= 70) {
          n = Math.floor(Math.random() * advancedIce.length);
          tempBuiltICE.push(advancedIce[n]);
          console.warn("Advanced ICE");
        } else if (m > 70) {
          n = Math.floor(Math.random() * extremeIce.length);
          tempBuiltICE.push(extremeIce[n]);
          console.error("Extreme ICE");
        }
        break;
    }
  }
  console.log(`Basice ICE Values are: ${baseICEValues}`);
  console.log(tempBuiltICE);
}

// determineDifficulty();

//*****Doesn't quite work yet in the UI. It goes one more in the direction it's going
//based on what I'm clicking, like it has momentum or something
//This section determines how the program handles the input for the buttons
document
  .querySelector(".difficultyMinusButton")
  .addEventListener("click", function () {
    document.querySelector(".difficultyOutput").textContent = difficultyLevel--;
    console.warn(`Difficulty At ${difficultyLevel}`);
    // console.warn(tempDifficultyLevel);
    //Okay, so this works in that it actually changes the tempDifficultyLevel value correctly,
    //but it isn't displaying correctly, so the problem might be elsewhere
  });

document
  .querySelector(".difficultyPlusButton")
  .addEventListener("click", function () {
    document.querySelector(".difficultyOutput").textContent = difficultyLevel++;
    console.warn(`Difficulty At ${difficultyLevel}`);
    // console.warn(tempDifficultyLevel);
    //Okay, so this works in that it actually changes the tempDifficultyLevel value correctly,
    //but it isn't displaying correctly, so the problem might be elsewhere
  });

document
  .querySelector(".difficultyGenerateButton")
  .addEventListener("click", function () {
    //This is the part that will handle the network generation part
    //for now it just calls the basic "5" default function
    buildNetwork();
    // builtNetwork = []; //This alone doesn't work in resetting it
    console.warn(builtNetwork);
  });

document
  .querySelector(".sizeMinusButton")
  .addEventListener("click", function () {
    document.querySelector(".sizeOutput").textContent = networkSize--;
    console.error();
    `Network Size At ${networkSize}`;
  });

document
  .querySelector(".sizePlusButton")
  .addEventListener("click", function () {
    document.querySelector(".sizeOutput").textContent = networkSize++;
    console.error(`Network Size At ${networkSize}`);
  });

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

/*
Next I need to make it so that:
  1) A second array is built with the ICE that's the same length as the first array, real basic like
  2) The mechanic that builds the second array, the ICE array, is more refined so that it
    pulls from the different difficulty levels, so that it's not all just one type of ICE


I need to split the Network Dificulty user selection into 2 different functions that work almost
  the same way; one that allows the user to set the network size, and one that allows the user to 
  set the network difficulty which will determine the random ICE that protects each node


I need to have 2 selections for the user:
  1) A selection for network size (how many nodes)
  and
  2) A selection for nework difficulty
    The selection for difficulty will crate an aray the length of the network size, and
    populate items with a value between 1 and the difficulty (max 5). A function will
    run that checks what the value of each item in the array is, and then pulls randomly
    from the respective ICE array based on the difficulty number. IE, a small, easy network
    will have an array of [1,1] so the difficulty builder pulls two ICE from the basicICE array,
    and a medium size medium difficulty network will be [1,3,2,1,2] and will pull from the respective
    ICE arrays
*/
