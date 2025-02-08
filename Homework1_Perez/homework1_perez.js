/*
Homework 1: control flow and loops
Henry Perez
*/
console.log("\n------ Program 1: Conditional Statement ------")
let userinput = parseInt(prompt("Please enter a number: "))
if(userinput<0){
    console.log("Never have negative balance!")
}
else if(userinput>0){
    console.log("Think positively!")
}
else if(userinput===0){
    console.log("Yin and Yang!")
}
else if(userinput===" "){
    console.log("Your answer was blank!")
}
else{
    console.log("Null and void!")
}

console.log("\n------ Program 2: For Loop and Nested Conditional Statement ------")
let numbers = [];
for(numbers_entered = 0;numbers_entered<10;numbers_entered++){
    let usernumbers = parseInt(prompt(`Please enter 10 numbers (${numbers_entered+1}/10): `));
    numbers[numbers_entered] = usernumbers
}
let by_3 = 0
let by_5 = 0
let by_7 = 0
for (let i = 0; i < 10; i++) {
    if (numbers[i]%3===0) by_3++;
    if (numbers[i]%5===0) by_5++;
    if (numbers[i]%7===0) by_7++;
}
console.log(`${by_3} numbers are multiple of 3`);
console.log(`${by_5} numbers are multiple of 5`);
console.log(`${by_7} numbers are multiple of 7`);