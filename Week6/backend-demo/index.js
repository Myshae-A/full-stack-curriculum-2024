const express = require("express")
require('dotenv').config()
const app = express(); // created an express server

// example api here: (this line neeeded for database)
app.use(express.json())
// fake database
const tweets = [
    {
        id: 1, user:"Vincent", tweet: "I'm voting for joe Biden!"
    },
    {
        id: 2, user:"Heebob", tweet: "I'm voting for Mike Pence"
    }
]

app.get("/", (req, res) => { // request, response
    console.log("Hello to the server!")
    res.send("Hello to the client!") // when a client accesses us, it will return hello text to the user/client
})

app.get("/tweets", (req, res) => { // IS OUR API REQUEST HERE!!!
    res.send(tweets)
})

app.get("/tweets/:user", (req, res) => {
    // returns the first index of a tweet object that matches requiremnets parameter
    // t stands for every tweet in the array here....
    let index = tweets.find(t => t.user === req.params.user)
    if(index) {
        res.send(index)
    } else {
        res.status(404).send("TWEET NOT FOUND!")
    }
})

app.post("/tweets", (req, res) => { // request, response
    let tweet = { // initializes tweet object
        id: tweets.length + 1,
        user: req.body.user,
        tweet: req.body.tweet
    }
    tweets.push((tweet))
    res.send(tweet)
})


const port = process.env.PORT //4000 initialized to this
console.log(`http://localhost:${port}`)
app.listen(port, () => console.log(`Server is up and running on port ${port}!`)) // creates heartbeat of code





