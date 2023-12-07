import fs from "fs";

function main(){
    const input = fs.readFileSync("./part-01-input.txt").toString();
//    const input = 
//`two1nine
//eightwothree
//abcone2threexyz
//xtwone3four
//4nineeightseven2
//zoneight234
//7pqrstsixteen`

    const lines = input.split("\n");
    const nums = lines
        .map(line => {
            line = line.replaceAll("one", "o1ne"); 
            line = line.replaceAll("two", "tw2o"); 
            line = line.replaceAll("three", "thr3ee"); 
            line = line.replaceAll("four", "fo4ur"); 
            line = line.replaceAll("five", "fi5ve"); 
            line = line.replaceAll("six", "si6x"); 
            line = line.replaceAll("seven", "sev7en"); 
            line = line.replaceAll("eight", "eig8ht"); 
            line = line.replaceAll("nine", "ni9ne"); 

            return line;
        })
        .map(line => {

            console.log(line);
            let i=0;
            let currentNumStr = "";
            //loop to find the first number
            while(i < line.length){
                let foundNum = Number(line[i]);
                if(!isNaN(foundNum) && currentNumStr.length < 2){
                    //if there are no digit entered or only one digit entered, just push the next found digit
                    //currentNumStr = currentNumStr.concat(`${foundNum}`);     
                    currentNumStr += `${foundNum}`;
                    console.log("first number: ", foundNum);
                }else if(!isNaN(foundNum) && currentNumStr.length >= 2){
                    //if already two digit is added, remove the last digit and add new digit. because the
                    //second digit has to be the last digit present in the line 
                    currentNumStr = currentNumStr.slice(0, currentNumStr.length - 1);
                    currentNumStr += `${foundNum}`;
                    console.log("second number: ", foundNum);
                }
                i++;
            }
            if(currentNumStr.length === 1) currentNumStr += currentNumStr;
            console.log(currentNumStr);
            return currentNumStr;

    }).reduce((sum, curr) => {
        sum += Number(curr);
        return sum;
    }, 0)

    console.log(nums);
}

main();

export {};

