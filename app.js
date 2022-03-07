// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

// function generateDie(num) {
//     console.log(num);
// }

// generateDie(die1);


// function singSong() {
//     console.log("DO RE MI")
// }


// function greet(firstName) {
//     console.log(firstName);   
// }

// greet("chase");

let bankAccountBalance = 0;

function payDay(depositAmount){
    bankAccountBalance += depositAmount;
    console.log(bankAccountBalance);
}

function expenditure(totalCost){
    bankAccountBalance -= totalCost;
    console.log(bankAccountBalance)
}

function repeat(a,b) {
    let result = ""
    for(i=1; i <=b; i++){
        result += a
    }
    console.log(result);
}



function add(x,y) {
    let sum = x + y;
    // return sum
}


//Scope

//Lexical Scope
function bankRobbery() {
    const heroes = ["Spiderman", "Thor", "Iron Man", "Black Widow"];
    function cryForHelp() {
        for(let hero of heroes) {
            console.log(`Please help me ${hero}`);
        }   
    }
    cryForHelp();
}

//Function Expressions
const multiply = function (x,y) {
        return x * y;
}


//Higher Order Functions - Passing them as arguments or returning a Functions

function makeMysteryFunc() {
    const rand = Math.random()
    if(rand > 0.5) {
        return function() {
            
        }
    }
}


const func = function(num) {
    console.log(`This is a function expression - Number: ${num}`);
}

//A function that tells if a number is between 50 - 100

function isBetweenOne(num) {
    if(num > 50 && num < 100) {
        return true
    } else {
        return false
    }
}

let isBetweenTwo = function(num) {
    if(num > 50 && num < 100) {
        return true
    } else {
        return false
    }
}

let isBetweenThree = num => {
    if(num > 50 && num < 100) {
        return true
    } else {
        return false
    }
}

const myMath = {
    heartRate(num) {
        return num * 4
    }
}


//Using the keyword "this" in methods

const person = {
    first: "Chase",
    last: "Newman",
    fullName() {
        return `${this.first} ${this.last}`
    }
}

const arr = [];

const randCreator = function() {
    for(i=0; i<1000; i++) {
        let num = Math.floor(Math.random() * 1000) + 1;
        arr.push(num)
    }
}

randCreator();

console.log(arr);

let newIndex = Math.floor(Math.random() * 1000) + 1;

let newNum = arr[newIndex];

console.log(arr.indexOf(newNum));

console.log(`The current random number is ${arr[newIndex]}, with an index of ${newIndex}`);


try {
    console.log(bill)
} catch (err) {
    console.log(err);
}









