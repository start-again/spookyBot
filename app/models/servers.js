const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const { resolve } = require('path')

const adapter = new FileSync(resolve(__dirname, `../db/servers.json`))
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ servers: [] }).write()

// Create a guild
exports.createGuild = (guildId) => {
  db.get('servers').push({ id: guildId, lang: 'en' }).write()
}

// Get a guild
exports.getGuild = (guildId) => {
  return db.get('servers').find({ id: guildId }).value()
}

// Change server language
exports.changeLang = (guildId, lang) => {
  db.get('servers').find({ id: guildId }).assign({ lang: lang }).write()
}

// Delete a guild
exports.deleteGuild = (guildId) => {
  db.get('servers').remove({ id: guildId }).write()
}
