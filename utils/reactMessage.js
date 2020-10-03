const { getGuild } = require('../models/servers')

module.exports = async (guildId, message) => {
  const guildData = await getGuild(guildId)
  const translation = await require(`../lang/${guildData.lang}.js`)
  const words = message.content.toLowerCase().trim().split(/ +/g)
 
  words.forEach((word) => {
    const wordData = translation.words.find((w) => w.name == word)
    if (wordData != undefined) message.react(wordData.emoji)
  })
}
