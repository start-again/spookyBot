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

const translationNameContainsUser = (translationName, mentions) => {
  // Search all mentions for trigger words, cast translationName to an array if not for compactness
  return mentions.members.some(m => (typeof translationName === 'string' ? [translationName] : translationName).some(w => m.displayName.toLowerCase().contains(w)))
}

module.exports = async (guildId, message) => {
  const guildData = await getGuild(guildId)
  const translation = await require(`../lang/${guildData.lang}.js`)
  const fullMessage = message.content.toLowerCase()

  translation.words.forEach((w) => {
    if (translationNameContainsWord(w.name, fullMessage)) message.react(w.emoji)
  })
  translation.mentions.forEach(m => {
    if (translationNameContainsUser(m.name, message.mentions)) message.react(m.emoji)
  })
}
