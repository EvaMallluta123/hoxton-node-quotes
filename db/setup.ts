import Database from "better-sqlite3"
const db= Database("./db/data.db", {verbose:console.log})
function createQuotesStuff(){
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

const createQuotesTable= db.prepare(`
CREATE TABLE IF NOT EXISTS quotes(
    id INTEGER NOT NULL,
    name TEXT NOT NULL,
    quote TEXT NOT NULL,
    age INTEGER NOT NULL,
    image TEXT NOT NULL,
    PRIMARY KEY (id)

);`)
createQuotesTable.run()

 const deleteAllQuotes = db.prepare(`
 DELETE FROM quotes;
 `)
 deleteAllQuotes.run()
  const createQuote=db.prepare(`
  INSERT INTO quotes(name, quote, age, image)
  VALUES (?, ?, ?, ?);
  `)
   for (let quote of quotes){
createQuote.run(quote.name, quote.quote, quote.age, quote.image)
   }

}
createQuotesStuff()