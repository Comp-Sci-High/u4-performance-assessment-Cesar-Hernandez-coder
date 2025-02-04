const express = require('express')
const app = express()



const legoPosts = {
  rare: [
    {
      name: "Chrome Gold C-3PO",
      timeMade: "2007",
      originalPrice: "Free Promotional",
      usedCondition: 834,
      newCondition: 1220,
      description: "his is the Star Wars 30th Anniversary Edition C-3PO and was randomly included in a few specially marked LEGO Star Wars sets in 2007. Only 10,000 units were released and the LEGO Group randomly inserted it into 30th anniversary LEGO Star Wars sets.",
      howManyLeft: 10000
    },
    {
      name: "Chrome Vader",
      timeMade: "2009",
      originalPrice: "Free Promotional",
      usedCondition: 351,
      newCondition: 724,
      description: "The minifigure was designed to promote the Star Wars' 10th anniversary. Only 10,000 Chrome Darth Vaders were created and were randomly inserted into 2009 Star Wars sets in the US and Europe.",
      howManyLeft: 10000
    },
    {
      name: "Chrome Silver C 3PO",
      timeMade: "2012",
      originalPrice: "Free Promotional",
      usedCondition: 101,
      newCondition: 190,
      description: "LEGO 5000063 TC-14 was a 3 piece Star Wars promotional set with 1 minifig released in 2012. It features the TC-14 minifigure, a chrome-finished protocol droid with detailed printing, including colorful wiring on the torso and yellow eyes.",
      howManyLeft: 3
    },
    {
      name: "Cloud City Boba",
      timeMade: "2003",
      RetailPrice: 99.99,
      usedCondition: 1562,
      newCondition: 3000,
      description: " Boba Fett minifigure from Cloud City with printed arms and legs. This version of the Boba Fett minifigure is exclusive to the LEGO Cloud City set.",
      howManyLeft: "Unknown"
    },
    {
      name: "Jango Fett",
      timeMade: "2002",
      RetailPrice: 50,
      usedCondition: 308,
      newCondition: 487,
      description: "The LEGO Star Wars Jango Fett minifig was first introduced in 2002 in the set 7153 Jango Fett's Slave I and is currently estimated to be valued around $407 and an annual growth of about 14.7%.",
      howManyLeft: "Unknown"
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
  
  app.listen(3000, () => {
    console.log("Server running")
  })