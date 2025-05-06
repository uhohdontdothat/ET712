const events = require('events')
const util = require('util')

const teams = function(name){
    this.name = name
}
// eventEmitter will inheret any teams construct
util.inherits(teams, events.EventEmitter)

const Barcelona = new teams('Barcelona')
const Milan = new teams('Milan')

// save each constructor in an array
const teamsArray = [Barcelona, Milan]

// print each team using forEach loop
teamsArray.forEach((t)=>{
    t.on('nation',function(n){
        console.log(`${t.name} is ${n} football club!`)
    })
})

Milan.emit('nation', 'Italian')


/*
const eventEmitter = new events.EventEmitter

eventEmitter.on('test', function(a){
    console.log(a)
})

eventEmitter.emit('test','EVENT IN NODEJS')
*/