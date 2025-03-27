console.log("henry perez")

let colordisplay = document.querySelector("#color")
let shapename = document.querySelector(".shapename")

function randcolor(){
    let lastcolor = 100
    randnum = Math.floor(Math.random()*5)
    while(lastcolor!==randnum){
    if(randnum===0){
        colordisplay.style.backgroundColor = "red"
        lastcolor = 0
    }
    else if(randnum===1){
        colordisplay.style.backgroundColor = "orange"
        lastcolor = 1
    }
    else if(randnum===2){
        colordisplay.style.backgroundColor = "yellow"
        lastcolor = 2
    }
    else if(randnum===3){
        colordisplay.style.backgroundColor = "green"
        lastcolor = 3
    }
    else if(randnum===4){
        colordisplay.style.backgroundColor = "blue"
        lastcolor = 4
    }}
}

// make it so the same color doesnt appear back to back, its a bit annoying and confusing!

window.addEventListener("load",randcolor())

function checkcolor(){
    let colorinput = document.querySelector("#colorinput")
    let input = (colorinput.value.toLowerCase()).trim()
    let colordisplayed = colordisplay.style.backgroundColor

    if(input===colordisplayed){
        console.log("right color!")
        color.style.backgroundColor = randcolor() 
        colorinput = ""
    }
    else{
        console.log("wrong color...")
    }

}

function loadshape(){
    randshape = Math.floor(Math.random()*4)
    if(randshape===0){
        shapename.innerHTML = "CIRCLE"
    }
    else if(randshape===1){
        shapename.innerHTML = "SQUARE"
    }
    else if(randshape===2){
        shapename.innerHTML = "TRIANGLE"
    }
    else if(randshape===3){
        shapename.innerHTML = "TRAPEZOID"
    }
}

window.addEventListener("load",loadshape())
let triangle = document.querySelector(".triangle")
let square = document.querySelector(".square")
let circle = document.querySelector(".circle")
let trapezoid = document.querySelector(".trapezoid")

triangle.addEventListener("click",function(){
    if(shapename.innerHTML==="TRIANGLE"){
        console.log("Awesome, you clicked the triangle!")
        shapename.classname = loadshape()
    }
    else{
        console.log("Wrong shape!")
    }
})
square.addEventListener("click",function(){
    if(shapename.innerHTML==="SQUARE"){
        console.log("Awesome, you clicked the square!")
        shapename.classname = loadshape()
    }
    else{
        console.log("Wrong shape!")
    }
})
circle.addEventListener("click",function(){
    if(shapename.innerHTML==="CIRCLE"){
        console.log("Awesome, you clicked the circle!")
        shapename.classname = loadshape()
    }
    else{
        console.log("Wrong shape!")
    }
})
trapezoid.addEventListener("click",function(){
    if(shapename.innerHTML==="TRAPEZOID"){
        console.log("Awesome, you clicked the trapezoid!")
        shapename.classname = loadshape()
    }
    else{
        console.log("Wrong shape!")
    }
})


let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let btn7 = document.querySelector(".btn7")
let btn8 = document.querySelector(".btn8")
let btn9 = document.querySelector(".btn9")
let btn10 = document.querySelector(".btn10")
let newnumbers = document.querySelector(".newnumbers")
let checknumber = document.querySelector(".checknumber")
// im not gonna lie, this code is EXTREMELY ugly but has no bugs
btn1.addEventListener("click",function(){
    newnumbers.innerHTML += "1, "
})
btn2.addEventListener("click",function(){
    newnumbers.innerHTML += "2, "
})
btn3.addEventListener("click",function(){
    newnumbers.innerHTML += "3, "
})
btn4.addEventListener("click",function(){
    newnumbers.innerHTML += "4, "
})
btn5.addEventListener("click",function(){
    newnumbers.innerHTML += "5, "
})
btn6.addEventListener("click",function(){
    newnumbers.innerHTML += "6, "
})
btn7.addEventListener("click",function(){
    newnumbers.innerHTML += "7, "
})
btn8.addEventListener("click",function(){
    newnumbers.innerHTML += "8, "
})
btn9.addEventListener("click",function(){
    newnumbers.innerHTML += "9, "
})
btn10.addEventListener("click",function(){
    newnumbers.innerHTML += "10, "
})
checknumber.addEventListener("click",function(){
    if(newnumbers.innerHTML === "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "){
        console.log("Wow you know how to count!")
        newnumbers.innerHTML = ""
    }
    else{
        console.log("Is the code right or you really dont know how to count?")
        newnumbers.innerHTML = ""
    }
})

// THIS CODE IS UGLY LOL
let popuplion = document.querySelector(".popuplion")
let popuppeacock = document.querySelector(".popuppeacock")
let popuppenguin = document.querySelector(".popuppenguin")
let popupshark = document.querySelector(".popupshark")

let cardlion = document.querySelector(".cardlion")
let cardpeacock = document.querySelector(".cardpeacock")
let cardpenguin = document.querySelector(".cardpenguin")
let cardshark = document.querySelector(".cardshark")

let closex1 = document.querySelector(".closex1")
let closex2 = document.querySelector(".closex2")
let closex3 = document.querySelector(".closex3")
let closex4 = document.querySelector(".closex4")


cardlion.addEventListener("click",function(){
    popuplion.style.display = "block"
})
cardpeacock.addEventListener("click",function(){
    popuppeacock.style.display = "block"
})
cardpenguin.addEventListener("click",function(){
    popuppenguin.style.display = "block"
})
cardshark.addEventListener("click",function(){
    popupshark.style.display = "block"
})

closex1.addEventListener("click",function(){
    popuplion.style.display = "none"
})
closex2.addEventListener("click",function(){
    popuppeacock.style.display = "none"
})
closex3.addEventListener("click",function(){
    popuppenguin.style.display = "none"
})
closex4.addEventListener("click",function(){
    popupshark.style.display = "none"
})
