console.log("Henry Perez")
console.log("\n------ Example 1: Function in a variable ------")
// const keeps a constant value, let allows it to be changed
const sum = function(num1,num2){
    return num1+num2
}
// calling function
console.log(sum(5,8))

console.log("\n------ Example 2: Function in a variable ------")
// function to return the square root of a number
let squarenumber = function(n){
    return Math.pow(n,2)
}
// call function
console.log(squarenumber(5))

console.log("\n------ Example 3: Arrow Function ------")
let greet = (username) => {
    console.log(`Welcome to JS ${username}`)
}

// call function
greet("Peter Pan")

console.log("\n------ Example 4: Function with default parameter ------")
function cubenumber(n){
    return Math.pow(n,3)
}
// call function
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

console.log("\n------ Example 5: Spread Syntax ------")
nums = [-2,5,9,3,-8]
let maxnum = Math.max(...nums)
// ... is splitting, which lets the function properly identify each individual value in an array.
console.log(maxnum)

console.log("\n------ Example 6: Objects ------")
//Objects have properties which are details of the object, and methods which is what the object can do
// create an object
const car ={
    // properties
    type:"Fiat",
    model: 500,
    color:"white",
    price: 23000,

    // methods
    description:function(){
        // when using "this" in this line, it is refering to "car"
        return `${this.color} ${this.type} costs ${this.price}`
    }
}
// calling the object property 'model'
console.log(car.model)
// calling the object method 'description'
console.log(car.description())

console.log("\n------ Example 7: Objects ------")
const hen = {
    // propertis
    name: "Helen",
    eggcount: 0,
    year: 2025,

    // method
    LayAnEgg: function(){
        this.eggcount++
        return "EGG"
    }
}
// calling the property 'eggcount'
console.log(`${hen.name} has laid ${hen.eggcount} eggs`)
// calling the method
console.log(hen.LayAnEgg())
console.log(hen.LayAnEgg())
console.log(`${hen.name} has laid ${hen.eggcount} eggs`)
console.log(hen.LayAnEgg())
console.log(`${hen.name} has laid ${hen.eggcount} eggs`)

console.log("\n------ Example 8: try-except ------")
function yell(msg){
    try{
    console.log(msg.toUpperCase().repeat(3))
    }
    catch(e){
        console.log(`ERROR!!! ${e}`)
    }
    finally{
        console.log("end of function 'yell'")
    }
}
// calling the function
yell("help ")
yell(8)
console.log("End of Example 8")

console.log("\n------ Exercise 1 ------")
const mycalculator ={
    // properties
    message:"This is a calculator",
    side:2,

    // methods
    area_square: function(side){
        return Math.pow(side,2)
    },
    volume_cube: function(side){
        return Math.pow(side,3)
    }
}
// calling the methods
console.log(mycalculator.area_square(5))
console.log(mycalculator.volume_cube(3))

console.log("\n------ Exercise 2 ------")
function divideNumbers(num1,num2){
    try{
    console.log(num1/num2)
    }
    catch{
    console.log("Error performing the division!")
    }
    finally{
    console.log("End of function divideNumbers")
    }
}
// calling the funtion
divideNumbers(8,4)
divideNumbers("Word",4)
