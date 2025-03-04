console.log("Henry Perez")
console.log(" ------ Example 1 ------")
// select element by class name
// class names are identified with a period(.)
let desc = document.querySelector(".description")
console.log(desc)
// select element by id name, "title"
// id names are identified with a hash tag(#)
let titlenode = document.querySelector("#title")
console.log(titlenode)
// select element/s by tag name, "p"
let par = document.querySelectorAll("p")
console.log(par)
// select all elements with class name "methods"
let methods = document.querySelectorAll(".methods")
console.log(methods)
// loop through each element in a node list
console.log(" ------ Example 2: Loop through each element in a node list ------")
for(let n = 0;n<methods.length;n++){
    console.log(methods[n])
}

console.log("\n ------ Example 3: Click Event ------")
// select the button
let btn = document.querySelector(".btnclick")
// add an event (click) to btn
btn.addEventListener("click",function(){
    alert("BTN WAS CLICKED")
})

console.log("\n ------ Example 4: Click Event to change text content ------")
// select the element, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
// add an event to 'msg' that changes the text node to "Henry Perez"
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Good Afternoon <b>Henry Perez </b>"
})

console.log("\n ------ Example 5: changing shapes mini-app ------")

// select elements
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// add an event to each button
btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})