/**
 * Henry Perez
 * Feb 4, Loops
 */
console.log("Henry Perez")
console.log("\n------ Example 1: For loops ------")
// use a for loop to print from 0 to 4
for(let n = 0; n<=4; n++){
    console.log(`counting = ${n}`)
}

console.log("\n------ Example 2: For loops with conditional statements ------")
// collect the initial value from the user
// print all even numbers  from the initial value to 20
let initialvalue = parseInt(prompt("Enter a number: "))
for(initialvalue; initialvalue<=20; initialvalue++){
    if(initialvalue%2==0){
        console.log(initialvalue) // only print even numbers
    }
}

console.log("\n------ Example 3: For loops as decrement counter ------")
// for loop to print from 9 to 0 --> 9 8 7 6 5 4 3 2 1 0
for(let n=9; n>=0;n-=3){
    console.log(n)
}

console.log("\n------ Example 4: For loops in an array(list) ------")
// set up a list of animals
let animals = ["fish","turtle","dog"]
for(let index=0;index<animals.length;index++)[
    console.log(animals[index])
]
// set up a list of numbers
// count how many negative numbers are in the list
let numbers = [5, -3, 10, -9, 2]
let counternegative = 0
for(let index = 0;index<numbers.length;index++){
    if (numbers[index]<0){
        counternegative++
    }
}
console.log(`There is/are ${counternegative} negative number/s in list 'numbers'`)
console.log("\n------ Example 5: For loops in a string ------")
let username = "Peter Pan"
let counter_e = 0
for(let index=0;index<username.length;index++){
    //console.log(username[index])
    // find the total number of 'e' in username
    if(username[index]==='e'){
        counter_e++
    }
}
console.log(`There is/are ${counter_e} letter e in 'username'`)
console.log("\n------ EXERCISE A: FOR LOOP ------")
let num = [-3,10,0,8,-9,5,-2,8,6,-1]
// use for loop to check and add all negative numbers and positive numbers
let sumpos = 0
let sumneg = 0
for(let index=0; index<num.length;index++){
    if (num[index]<0){
        sumneg+=num[index]
    }
    if(num[index]>0){
        sumpos+=num[index]
    }
}
console.log(`Sum of all negative numbers = ${sumneg}.`)
console.log(`Sum of all positive numbers = ${sumpos}.`)

console.log("\n------ Example 6: while loop as a counter ------")
// use a while loop to display number from 0 to 4 --> 0 1 2 3 4
let y = 0;
while(y<=4){
    console.log(y);
    y++
}

console.log("\n------ Example 7: while loop application ------")
// using while loop to check if the user number matches the secret number
const SECRET = 8
// collect a number from the user
let usernumber = parseInt(prompt("Enter a number:"))
let guesscounter = 0;
// run a while to recollect the user number if the number doesn't match the secret number
while(usernumber!==SECRET){
    guesscounter++
    usernumber = parseInt(prompt("Wrong guess! Enter another number:"))
}
console.log(`${usernumber} is right! Total attempts: ${guesscounter}`)

console.log("\n------ Example 8: break in a while loop ------")
// create an app to sum all positive even numbers. The app will continuosly collect a positive number and stop if a negative number is entered
let sumeven = 0;
let collectnumber;
while (true){
    collectnumber = parseInt(prompt("Enter a positive number:"))
    if(collectnumber<0){
        break
    }
    else{
        if (collectnumber%2===0){
            sumeven+=collectnumber
        }
    }
}
console.log(`The sum of all even numbers is ${sumeven}`)
console.log("\n------ Example 9: continue in a for loop ------")
// print number from -5 to 5, -5 -4 -3 -2 -1 0 1 2 3 4 5
for(let n=-5;n<=5; n++){
    if(n%2===0){
        continue
    }
    console.log(n)
}

console.log("\n------ EXERCISE B ------")
let secretpin = "0714";
let guessattempts = 0
let userpininput = prompt("Enter your 4 digit pin!: ")
guessattempts++
while (userpininput!==secretpin){
    guessattempts++
    userpininput = prompt("That wasn't the right pin! Please try again!")
    if(guessattempts===3){
        console.log("Account is locked!")
        break
    }
}
if(userpininput===secretpin){
    console.log("Your pin number is correct!")
}
