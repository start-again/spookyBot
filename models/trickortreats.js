const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/trickortreats.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ trickortreats: [] }).write()

// Find a trick or treat
exports.getTrickOrTreat = (userId) => {
  return db.get('trickortreats').find({ userId: userId }).value()
}

// Create a trick or treat
exports.createTrickOrTreat = (userId) => {
  db.get('trickortreats').push({ userId: userId, tricks: 0, treats: 0 }).write()
}

// Trick a user
exports.trick = (userId) => {
  const trickOrTreat = db.get('trickortreats').find({ userId: userId })

  trickOrTreat.assign({ tricks: trickOrTreat.value().tricks++, lastPlayed: new Date() }).write()

  return this.getTrickOrTreat(userId)
}

// Treat a user
exports.treat = (userId) => {
  const trickOrTreat = db.get('trickortreats').find({ userId: userId })

  trickOrTreat.assign({ treats: trickOrTreat.value().treats++, lastPlayed: new Date() }).write()

  return this.getTrickOrTreat(userId)
}
