import express from "express"
import cors from 'cors'
import Database from "better-sqlite3"

const db= Database("./db/data.db", {verbose:console.log})
const app = express()
app.use(cors())
const port = 4000

const getQuote= db.prepare(`
SELECT * FROM quote;

`)
const getQuoteById= db.prepare(`
SELECT * FROM quote WHERE id=?;
`)
const createQuote= db.prepare(`
INSERT INTO quote(name,quote,age,image)Valuea(?, ?, ?, ?);
`)

const updateQuote= db.prepare(`
UPDATE quote SET name=?, quote=?, age=?, image=?;
`)
app.get('/home', (req, res) => {
  const quotes= getQuote.all()
  res.send(quotes)
})
app.get('/home/:id', (req, res) => {
  const id = Number(req.params.id)
const match= getQuoteById.get(id)
  if (match) {
    res.send(match)
  } else {
    res.status(404).send({ error: 'Not found.' })
  }
})
app.post(`.home`, (req,res)=>{
  const name= req.body.name
  const age= req.body.age


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
  if(errors.length>0){
    res.status(400).send({errors})
  }
else {
const info=  createQuote. run(name,quote,age,image)
const quote=getQuoteById.get(info.lastInsertRowid)
res.send(quote)
}
})



app.listen(port, function () {
  console.log(`App is running yay! http://localhost:${port}`)
})