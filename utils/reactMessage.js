const { getGuild } = require('../models/servers')

String.prototype.contains = function (toCheck) {
  return this.indexOf(toCheck) >= 0
}

const translationNameContainsWord = (translationName, fullMessage) => {
  if (translationName instanceof Array) {
    return translationName.map((n) => fullMessage.contains(n)).reduce((a, b) => a || b)
  } else {
    return fullMessage.contains(translationName)
  }
}

module.exports = async (guildId, message) => {
  const guildData = await getGuild(guildId)
  const translation = await require(`../lang/${guildData.lang}.js`)
  const fullMessage = message.content.toLowerCase()

  translation.words.forEach((w) => {
    if (translationNameContainsWord(w.name, fullMessage)) message.react(w.emoji)
  })
}
