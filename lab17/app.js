/*
console.log("------ Example 1: Console messaging ------")
console.warn("This is a warning message!")
console.error("ERROR!")

console.log("\n------ Example 2: Global object of JS")
setTimeout(()=>{
    console.log('Welcome to nodejs')
}, 3000)

let count = 0

const timer = setInterval(()=>{
    count +=2
    console.log(`Counting = ${count} times`)
    if(count == 10){
        clearInterval(timer)
    }
}, 2000)
*/
console.log("\n------ Example 3: Modules ------")
const name = require("./mod")
console.log(name.helper("Peter"))
console.log(name.id(12345))
console.log(name.email("peter@neverland.com"))

console.log("\n------ Example 4: Creating a server ------")
// import the http module
const http = require("http")
const fs = require('fs') // File streaming module

// create server
const server = http.createServer((request, response)=>{
    // send the request
    response.writeHead(200, {'content-type':'text/html'})
    const readstream = fs.createReadStream(__dirname + '/index.html')

    // pipe information
    readstream.pipe(response)
})

// server listening to port 3000
server.listen((3000), function(){
    console.log("Server is running!")
})