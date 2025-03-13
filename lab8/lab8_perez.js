console.log("Henry Perez")
/**
 * Example 1
 */
// Collect the element\
let btnpressme = document.querySelector(".btnpressme")
// Add a click event to change the button text and background color when the button is clicked
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME"){
        e.target.textContent = "Button was pressed!"

    }
    else{
        e.target.textContent = "PRESS ME"
    }
    // toggle between class 'btnpressme' and 'btnactive'
        e.target.classList.toggle("btnactive")

})

/**
 * Example 2
 */
// remove the <li> if it's clicked
// collect the element
let fruitlist = document.querySelector("#fruitlist")

// click event to remove the <li> when it's clicked
fruitlist.addEventListener("click", function(event){
    // check if the clicked element is a 'li'
    if(event.target.tagName.toLowerCase() === 'li'){
        // remove the 'li' that was clicked
        event.target.remove()

    }
    else{
        console.log(event.target)
    }
})

/**
 * Example 3: Prevent Default
 */
// Collect the element
let linkgithub = document.querySelector(".linkgithub")

linkgithub.addEventListener("click",function(event){
    event.preventDefault()
    alert("Github website is off!")
})

/**
 * Example 4
 */
// Collect element
let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let closex = document.querySelector(".closex")

linkreadmore.addEventListener("click",function(){
    modalwindow.style.display = "block"
})
closex.addEventListener("click",function(){
    modalwindow.style.display = "none"
})
/**
 * Exercise
 */
let circle = document.querySelector(".circle")
let btnreset = document.querySelector(".btnreset")
let count = document.querySelector(".count")
let i = 0
circle.addEventListener("click",function(){
    i++
    count.innerHTML = i
})
btnreset.addEventListener("click",function(){
        count.innerHTML = 0
})
