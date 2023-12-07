import fs from "fs"; 

const input = fs.readFileSync("./part-01-input.txt").toString();

//const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
//Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
//Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
//Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
//Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

const lines = input.split("\n");

//which games would be possible if the bag contains:
//red: 12
//green: 13
//blue: 14

//return the sum of all the game ids which are possible 

let validGames = [];

//parsing

lines.map(line => {
    let gameIdString = line.slice(5, line.indexOf(":"));
    let gameId = Number(gameIdString);
    let gameSets = line.slice(8).split(";");
    //gameSets.forEach(set => {
    let isGameValid = false;
    for(const set of gameSets){
        let blueBalls = Number(`${set.charAt(set.indexOf(" blue") - 2)}${set.charAt(set.indexOf(" blue") - 1)}`);
        let redBalls = Number(`${set.charAt(set.indexOf(" red") - 2)}${set.charAt(set.indexOf(" red") - 1)}`);
        let greenBalls = Number(`${set.charAt(set.indexOf(" green") - 2)}${set.charAt(set.indexOf(" green") - 1)}`);
        

        if(blueBalls > 14 || greenBalls > 13 || redBalls > 12){
            //the game is not valid
            isGameValid = false;
            break;
        }else {
            isGameValid = true;
        }
    }

    if(isGameValid) validGames.push(gameId);
})

console.log(validGames.reduce((prev, curr) => prev + curr));

