import express from "express"


const basket = [
  {
    id: 1,
    name: " Dalai Lama",
    quote:"The purpose of our lives is to be happy." 
  },
  {
    id: 2,
    name: " John Lennon",
    quote:"Life is what happens when you're busy making other plans." 
  },
  {
    id: 3,
    name: " Stephen King",
    quote:"Get busy living or get busy dying." 
  },
  {
    id: 4,
    name: "Babe Ruth",
    quote:"Never let the fear of striking out keep you from playing the game."
  },
  {
    id: 5,
    name: "Mae West",
    quote:"You only live once, but if you do it right, once is enough." 
  },
  {
    id: 6,
    name: "Thomas A. Edison",
    quote: "Many of life`s failures are people who did not realize how close they were to success when they gave up." 
  }
]

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(basket)
})


app.listen(port, function () {
  console.log(`App is running yay! http://localhost:${port}`)
})