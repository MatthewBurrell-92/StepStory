const readline = require('readline');

// Creates an interface for input and output
// this was difficult to figure out.
// https://nodejs.org/api/readline.html was particularly helpful
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to start the story
const startStory = () => {
    // Each function starts with a statement, like this one. This gives the context
    // for the prompt that follows.
    console.log("You wake up in a strange room. Do you go to the door or the window?");
    // Prompt is given in the question method of readline.
    rl.question('Type "door" or "window": ', (choice) => {
        // toLowerCase makes it so the program only checks the characters, not the cases.
        if (choice.toLowerCase() === 'door') {
            // calls function to the next step in the game.
            hallway();
        } else if (choice.toLowerCase() === 'window') {
            ladder();
        } else {
            // Error handling. Calls this function again to prompt for a new response.
            console.log("Invalid choice. Please type 'door' or 'window'.");
            startStory(); // Restart the story if the input is invalid
        }
    });
};

// Function for the hallway scenario
const hallway = () => {
    console.log("You find yourself in a hallway. Do you go left or right?");
    rl.question('Type "left" or "right": ', (choice) => {
        if (choice.toLowerCase() === 'left') {
            hallwayLeft();
            // rl.close();
        } else if (choice.toLowerCase() === 'right') {
            console.log("As you walk down the hallway, you hear a woman scream!");
            scream();
            // rl.close();
        } else {
            console.log("Invalid choice. Please type 'left' or 'right'.");
            hallway(); // Restart the hallway scenario if the input is invalid
        }
    });
};

// Function for the ladder scenario
const ladder = () => {
    console.log("You see a ladder. Do you climb down or up?");
    rl.question('Type "down" or "up": ', (choice) => {
        if (choice.toLowerCase() === 'down') {
            ground();
        } else if (choice.toLowerCase() === 'up') {
            roof()
        } else {
            console.log("Invalid choice. Please type 'down' or 'up'.");
            ladder(); // Restart the ladder scenario if the input is invalid
        }
    });
};

// Function for the roof scenario
const roof = () => {
    console.log("You find yourself on the roof of the building. "
         + "There is a door leading inside. There is also a skylight. "
         + "Do you go to the door or look in the skylight?");
    rl.question('Type "door" or "skylight": ', (choice) => {
        if (choice.toLowerCase() === 'door') {
            console.log("You open the door and go inside. As you come down "
                + "the stairs, you see your wife, who has noticed you just "
                + "came from the roof. She yells at you and makes you cook dinner.");
            rl.close();
        } else if (choice.toLowerCase() === 'skylight') {
            console.log("You look in the skylight and see your family. "
                + "You realize you were in your house all along. "
                + "You feel kind of dumb.");
            rl.close();
        } else {
            console.log("Invalid choice. Please type 'door' or 'skylight'.");
            roof(); // Restart the roof scenario if the input is invalid
        }
    });
};

// Function for the scream scenario
const scream = () => {
    console.log("You panic. That sounded real. Do you keep going, or turn around? ");
    rl.question('Type "keep going" or "turn around": ', (choice) => {
        if (choice.toLowerCase() === 'keep going') {
            console.log("You find a room with several people, whom you recognize "
                + "to be your family! Your wife has cut herself and you help bandage "
                + "her wound. She says she loves you and cooks you dinner. ");
            rl.close();
        } else if (choice.toLowerCase() === 'turn around') {
            hallwayLeft();
            // rl.close();
        } else {
            console.log("Invalid choice. Please type 'keep going' or 'turn around'.");
            scream(); // Restart the ladder scenario if the input is invalid
        }
    });
};

// Function for the hallway, going left, scenario
const hallwayLeft = () => {
    console.log("While walking down the hallway, you hear the door at the other end open "
        + "and someone start walking towards you. Do you run, or confront them?");
    rl.question('Type "run" or "confront": ', (choice) => {
        if (choice.toLowerCase() === 'run') {
            runAway();
            // rl.close();
        } else if (choice.toLowerCase() === 'confront') {
            console.log("It's your wife. She is mad at you and makes you cook dinner.");
            rl.close();
        } else {
            console.log("Invalid choice. Please type 'run' or 'confront'.");
            hallwayLeft(); // Restart the ladder scenario if the input is invalid
        }
    });
};

// Function for the run away scenario
const runAway = () => {
    console.log("You reach the end of the hall and enter the only door. You see a bouquet "
        + "of flowers and a baseball bat. Which do you grab to defend yourself?");
    rl.question('Type "flowers" or "bat": ', (choice) => {
        if (choice.toLowerCase() === 'flowers') {
            console.log("Your wife enters the room. She sees the flowers and assumes you bought "
                + "them for her. She says she loves you and cooks you dinner. ");
            rl.close();
        } else if (choice.toLowerCase() === 'bat') {
            console.log("It's your wife. She sees the bat, and knows you ran from her. So she "
                + "hits you with the bat. You wake up in a strange room. "
                + "Do you go to the door or the window...");
            rl.close();
        } else {
            console.log("Invalid choice. Please type 'flowers' or 'bat'.");
            runAway(); // Restart the ladder scenario if the input is invalid
        }
    });
};


// Function for the ground scenario
const ground = () => {
    console.log("You see your car in the driveway. Do you go to your car, or go inside the house? ");
    rl.question('Type "car" or "house": ', (choice) => {
        if (choice.toLowerCase() === 'car') {
            console.log("You remember it is your wife's birthday and she had asked you to buy some " 
                + "lentils for dinner. You remember something about a baseball bat... But you grab "
                + "the lentils and go inside. Your wife makes you dinner. ");
            rl.close();
        } else if (choice.toLowerCase() === 'house') {
            console.log("Your wife finds you standing in the doorway. She asks you where the lentils are. "
                + "She gets mad when your answer isn't 'Don't worry honey, I bought the lentils, cooked them, "
                + "and also bought you a diamond necklace for your birthday!' She makes you cook dinner.");
            rl.close();
        } else {
            console.log("Invalid choice. Please type 'car' or 'house'.");
            ground(); // Restart the ladder scenario if the input is invalid
        }
    });
};

// Start the story
startStory();
