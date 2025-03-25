console.log("henry perez")

let colordisplay = document.querySelector("#color")

function randcolor(){
    randnum = Math.floor(Math.random()*5)
    if(randnum===0){
        colordisplay.style.backgroundColor = "red"
    }
    else if(randnum===1){
        colordisplay.style.backgroundColor = "orange"
    }
    else if(randnum===2){
        colordisplay.style.backgroundColor = "yellow"
    }
    else if(randnum===3){
        colordisplay.style.backgroundColor = "green"
    }
    else if(randnum===4){
        colordisplay.style.backgroundColor = "blue"
    }
}

window.addEventListener("load",randcolor())

// a bit inefficient i think

function checkcolor(){
    let colorinput = document.querySelector("#colorinput")
    let input = colorinput.value.toLowerCase()
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

// make it so it rolls a random number, 1 to 4. from there, it will pick red blue green or yellow to identify.