const express = require('express')
const app = express()



const legoPosts = {
  rare: [
    {
      name: "Chrome Gold C-3PO",
      imageURL: "https://www.brickeconomy.com/resources/images/sets/lego-4521221-1_large.jpg",
      timeMade: "2007",
      originalPrice: "Free Promotional",
      usedCondition: 834,
      newCondition: 1220,
      description: "his is the Star Wars 30th Anniversary Edition C-3PO and was randomly included in a few specially marked LEGO Star Wars sets in 2007. Only 10,000 units were released and the LEGO Group randomly inserted it into 30th anniversary LEGO Star Wars sets.",
      howManyLeft: 10000,
      series: "LEGO Star wars"
    },
    {
      name: "Chrome Vader",
      imageURL: "https://www.brickeconomy.com/resources/images/sets/lego-4547551-1_large.jpg",
      timeMade: "2009",
      originalPrice: "Free Promotional",
      usedCondition: 351,
      newCondition: 724,
      description: "The minifigure was designed to promote the Star Wars' 10th anniversary. Only 10,000 Chrome Darth Vaders were created and were randomly inserted into 2009 Star Wars sets in the US and Europe.",
      howManyLeft: 10000,
      series: "LEGO Star wars"
    },
    {
      name: "Chrome Silver C 3PO",
      imageURL: "https://www.brickeconomy.com/images/minifigs/sw0385/lego-tc-14-protocol-droid-minifigure-xlarge.jpg",
      timeMade: "2012",
      originalPrice: "Free Promotional",
      usedCondition: 101,
      newCondition: 190,
      description: "LEGO 5000063 TC-14 was a 3 piece Star Wars promotional set with 1 minifig released in 2012. It features the TC-14 minifigure, a chrome-finished protocol droid with detailed printing, including colorful wiring on the torso and yellow eyes.",
      howManyLeft: 3,
      series: "LEGO Star wars"
    },
    {
      name: "Cloud City Boba",
      imageURL: "https://www.brickeconomy.com/images/minifigs/sw0107/lego-boba-fett-minifigure-xlarge.jpg",
      timeMade: "2003",
      originalPrice: 99.99,
      usedCondition: 1562,
      newCondition: 3000,
      description: " Boba Fett minifigure from Cloud City with printed arms and legs. This version of the Boba Fett minifigure is exclusive to the LEGO Cloud City set.",
      howManyLeft: "Unknown",
      series: "LEGO Star wars"
    },
    {
      name: "Jango Fett",
      imageURL: "https://www.brickeconomy.com/images/minifigs/sw0053/lego-jango-fett-minifigure-xlarge.jpg",
      timeMade: "2002",
      originalPrice: 50,
      usedCondition: 308,
      newCondition: 487,
      description: "The LEGO Star Wars Jango Fett minifig was first introduced in 2002 in the set 7153 Jango Fett's Slave I and is currently estimated to be valued around $407 and an annual growth of about 14.7%.",
      howManyLeft: "Unknown",
      
    },
    {
      name: "Mr Gold",
      imageURL: "https://www.brickeconomy.com/resources/images/sets/lego-71001-19_large.jpg",
      timeMade: "2013",
      originalPrice: 3,
      usedCondition: "unknown",
      newCondition: 6252,
      description: " LEGO Mr. Gold is a Series 10 minifigure that contains 8 pieces and was released as part of the collectable series in 2013. The LEGO set number for Mr. Gold is 71001-19. Only 5,000 Mr. Gold minifigs were produced for the Series 10 Minifigures collection.",
      howManyLeft: "5000",
      
    }
  ]
}
  
  console.log(legoPosts);


  app.set(`view engine`, `ejs`)

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})


app.use(express.static(__dirname + "/public"))

app.get("/", (req,res) =>{
  res.sendFile(__dirname + "/public/index.html")
})
  

app.get("/overview", (req, res) => {
  res.render("category.ejs", legoPosts)
})

app.get('/starwars/:index', (req, res) => {
  const i = req.params.index
  res.render('lego.ejs', legoPosts.rare[i])
})
  
  app.listen(4000, () => {
    console.log("Server running")
  })