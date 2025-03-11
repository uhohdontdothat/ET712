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

/**
 * Tuesday, March 11th, Traditional Events
 */
// Example 6
// onmouseout event
// collect the element
let event6 = document.querySelector(".event6")
// add a mouseout event to open an alert dialog box
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}

// Example 7
// Inline event
function openalert(){
    alert("CLICK EVENT - Example 7")
}

// example 8 mouseover event
// change the background color of a div when the mouse hovers the element
// collect element
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randcolorred = parseInt(Math.floor(Math.random()*255))
    let randcolorgreen = parseInt(Math.floor(Math.random()*255))
    let randcolorblue = parseInt(Math.floor(Math.random()*255))

    divexample8.style.backgroundColor = `rgb(${randcolorred},${randcolorgreen},${randcolorblue})`
}

// Example 9: Keyboard Event
// Collect the elements
let inputexample9 = document.querySelector(".inputexample9")
let example9_paragraph = document.querySelector(".example9_paragraph")

inputexample9.onkeydown = function(event){
    example9_paragraph.innerHTML = `key ${event.key} was pressed`
}

/**
 * LAB EXERCISE
 */
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
let ps1 = document.querySelector(".ps1")
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.onmouseout = function(){
    ps1.innerHTML = 'Henry Perez'
}

// search for the second p with class ps2
// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
let ps2 = document.querySelector(".ps2")
ps2.addEventListener("click",function(){
    ps2.style.fontSize = "25px"
    ps2.style.color = "olive"
})

// search for the first div with class divs2
// add a click event to change the background color to indigo
let divs2 = document.querySelector(".divs2")
divs2.addEventListener("click",function(){
    divs2.style.backgroundColor = "indigo"
})


// search for the second div with class divs2 (did you mean divs3?)
// add a keydown event to change the width of divs2 to 300px
let divs3 = document.querySelector(".divs3")
// discovered that looking for any input from the DOCUMENT makes the even trigger.
document.onkeydown = function(){
    divs3.style.width = "300px"
}
