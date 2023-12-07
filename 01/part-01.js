import fs from "fs";

function main(){
    //const input = fs.readFileSync("./part-01-input.txt").toString();
//    const input = 
//`1abc2
//pqr3stu8vwx
//a1b2c3d4e5f
//treb7uchet`

    const input = 
`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
    const lines = input.split("\n");
    const nums = lines.map(line => {
        let i=0;
        let currentNumStr = "";
        console.log(line);
        //loop to find the first number
        while(i < line.length){
            let foundNum = Number(line[i]);
            if(!isNaN(foundNum) && currentNumStr.length < 2){
                //if there are no digit entered or only one digit entered, just push the next found digit
                //currentNumStr = currentNumStr.concat(`${foundNum}`);     
                console.log("first: ", foundNum);
                currentNumStr += `${foundNum}`;
            }else if(!isNaN(foundNum) && currentNumStr.length >= 2){
                //if already two digit is added, remove the last digit and add new digit. because the
                //second digit has to be the last digit present in the line 
                currentNumStr = currentNumStr.slice(0, currentNumStr.length - 1);
                currentNumStr += `${foundNum}`;
            }
            i++;
        }
        if(currentNumStr.length === 1) currentNumStr += currentNumStr;
        return currentNumStr;

    }).reduce((sum, curr) => {
        sum += Number(curr);
        return sum;
    }, 0)

    console.log(nums);
}

main();

export {};
