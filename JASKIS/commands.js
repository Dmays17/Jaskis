//Create Datebase
use jaskis
//Create Collection
debugger.createCollection('bounties')
//check Collection
show collections
//adding Animal Bounties
db.bounties.insertMany(
    [
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ]
  )
  //Queries
  db.bounties.find({location:'Grasslands'})
  db.bounties.find({reward:{$gt:10000}})
  db.bounties.deleteOne({})
  db.bounties.find({client:0}) gives error
  db.bounties.find({$and:[{species:'Groundhog'},{location:'Woodlands'}]})

  //Update and Delete
  db.bounties.updateOne({name:'Polarwind'},{$set:{reward:10000}})
  db.bounties.deleteOne({name:"Lokinkajou"})
  db.bounties.deleteMany({client:"Songbird"})
  db.bounties.updateMany({captured:false},{$set:{captured:true}})

  