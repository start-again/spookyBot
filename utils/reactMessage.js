const { getGuild } = require('../models/servers')

String.prototype.contains = function(toCheck) {
  return this.indexOf(toCheck) >= 0;
}

module.exports = async (guildId, message) => {
  const guildData = await getGuild(guildId)
  const translation = await require(`../lang/${guildData.lang}.js`)
  const fullMessage = message.content.toLowerCase()

  translation.words.forEach((w) => {
    const emoji = w.emoji
    const phrase = w.word
    if (fullMessage.contains(phrase)) message.react(emoji)
  })
}
