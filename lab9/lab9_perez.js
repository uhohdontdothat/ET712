console.log("Henry Perez")
// Example 1
// Collect the Element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click",function(){
    window.scrollBy(100,0)
})

/**
 * Example 2
 */
// Collect the elements
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")

// Function to scroll the gallery container
function scrollgallery(pixels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pixels,
        behavior: "smooth"
    })
}

// Add a click event to each buttons
btnright.addEventListener("click", function(){
    scrollgallery(1000)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-1000)
})

/**
 * Example 3
 */
let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxTop = window.scrollY
    console.log(pxTop)
    if(pxTop>175){
        topcontainer.style.display = "block";
    }
    else{
        topcontainer.style.display = "none";
    }
})