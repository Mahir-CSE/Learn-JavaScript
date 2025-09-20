// Ques 01: print all even numbers from 0 to 100

for(let i = 0; i<100; i++){
    if(i%2 == 0){
        console.log(i);
    }
    i++;
}

// give a number, and take random user input untill it matches with the given number

let idealNumber = 73;
let guessNumber = prompt("Guess a number: ");

while (idealNumber != guessNumber){
    guessNumber = prompt("Wrong guess, Please try again: ");
}
console.log("Congratulations!!! You have guess the number correctly");