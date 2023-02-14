const readLine = require('readline-sync');

let answer = readLine.question("Do you want to hear a joke?");
console.log(answer);

if (answer == "yes"){
    console.log(`why did the chicken cross the road? To get to the other side`);
} else{
    console.log(`aw man`);
}
console.log("end of program")

let number = readLine.question("can you choose a number?");
console.log(answer);
if (number % 2 == 0){
    console.log("divisble by 2")
}
if else (number % 3 == 0){
    console.log("divisible by 3")
}

else{
    console.log('no wrong')
}
console.log("end of program")