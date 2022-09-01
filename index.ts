import express from "express"
import cors from 'cors'


const quotes = [
  {
    id: 1,
    name: " Dalai Lama",
    quote:"The purpose of our lives is to be happy.",
    age:22,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dalailama1_20121014_4639.jpg/800px-Dalailama1_20121014_4639.jpg"

  },
  {
    id: 2,
    name: " John Lennon",
    quote:"Life is what happens when you're busy making other plans." ,
    age:35,
    image:"https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg"
  },
  {
    id: 3,
    name: " Stephen King",
    quote:"Get busy living or get busy dying." ,
    age:35,
    image:"https://stephenking.com/images/press/stephenking-sm.jpg"
  },
  {
    id: 4,
    name: "Babe Ruth",
    quote:"Never let the fear of striking out keep you from playing the game.",
    age:33,
    image:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMTU2NjQxNTU4MTQ0MzQ0/gettyimages-517324714.jpg"
  },
  {
    id: 5,
    name: "Mae West",
    quote:"You only live once, but if you do it right, once is enough." ,
    age:60,
    image:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2NDAzODI4MjM1/mae-west-9528264-1-402.jpg"
  },
  {
    id: 6,
    name: "Thomas A. Edison",
    quote: "Many of life`s failures are people who did not realize how close they were to success when they gave up." ,
    age:43,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/800px-Thomas_Edison2.jpg"
  }
]

const app = express()
app.use(cors())
const port = 4000

app.get('/home', (req, res) => {
  res.send(quotes)
})
app.get('/home/:id', (req, res) => {
  const id = Number(req.params.id)
  const match = quotes.find(item => item.id === id)

  if (match) {
    res.send(match)
  } else {
    res.status(404).send({ error: 'Not found.' })
  }
})
app.post(`.home`, (req,res)=>{
  let errors:string[]=[]
  if (typeof req.body.id !== 'number') {
    errors.push('Title not provided or not a number')
  }
  
  if (typeof req.body.name!== 'string') {
    errors.push('Title not provided or not a string.')
  }
  if (typeof req.body.quote!== 'string') {
    errors.push('Title not provided or not a string.')
  }
  if (typeof req.body.age !== 'number') {
    errors.push('Title not provided or not a number')
  }
  if (typeof req.body.image!== 'string') {
    errors.push('Title not provided or not a string.')
  }
  if(errors.length===0){
  const newQuote={
    id:quotes[quotes.length-1].id+1,
    name: req.body.name,
    quote:req.body.quote,
    age:req.body.age,
    image:req.body.image
  }
  quotes.push(newQuote)
  res.send(newQuote)
}else 
res.status(404).send({errors})
})


app.listen(port, function () {
  console.log(`App is running yay! http://localhost:${port}`)
})