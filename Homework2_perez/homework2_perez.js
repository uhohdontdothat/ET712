/*
Henry Perez
Homework 2 - functions, loops, and conditional statement
*/

console.log("\n------ Exercise 1 ------")
let names =["Ann","Peter","Patricia","Sam","Katerina"]
function name_counting(x){
    let nameslessthan5 = 0
    for(let n=0;n<x.length;n++){
        if(x[n].length<5){
            nameslessthan5++
        }
    }
    return nameslessthan5
}
console.log(name_counting(names))

console.log("\n------ Exercise 2 ------")
function check_num(){
    input = parseInt(prompt("Please enter a number!:"))
    if(isNaN(input)===true){
        input = parseInt(prompt("Invalid input! Please enter a number!"))
        }
    if(input%2===0){
        return true
    }  
    if(input%2!==0){
        return false
    }
}