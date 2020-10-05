const { treat, trick, createTrickOrTreat, getTrickOrTreat } = require('../../models/trickortreats')
const { prefix } = require('../../config.json')
const { readdirSync } = require('fs')
const { resolve } = require('path')

const isToday = (someDate) => {
  const today = new Date()
  const currentDate = new Date(Date.parse(someDate))

  return (
    currentDate.getDate() == today.getDate() &&
    currentDate.getMonth() == today.getMonth() &&
    currentDate.getFullYear() == today.getFullYear()
  )
}

module.exports = {
  config: {
    name: 'Trick or Treat',
    usage: `${prefix}trickortreat`,
    description: 'Gives you candy or scares you',
    command: 'trickortreat',
    aliases: [],
    displayHelp: false,
  },

  run: async (bot, message, args) => {
    let trickOrTreat = await getTrickOrTreat(message.author.id)

    if (!trickOrTreat) {
      await createTrickOrTreat(message.author.id)
      trickOrTreat = await getTrickOrTreat(message.author.id)
    }

    if (!trickOrTreat.lastPlayed || !isToday(trickOrTreat.lastPlayed)) {
      if (Math.random() >= 0.5) {
        trickOrTreat = await trick(message.author.id)

        message.reply(
          `:smiling_imp: Oh no! You have been tricked! You now have ${trickOrTreat.treats} :candy: and ${trickOrTreat.tricks} :smiling_imp:. Better luck tomorrow!`
        )
      } else {
        trickOrTreat = await treat(message.author.id)

        message.reply(
          `:candy: Sweet, sweet candy! You now have ${trickOrTreat.treats} :candy: and ${trickOrTreat.tricks} :smiling_imp:. There will be more candy up for grabs  tomorrow!`
        )
      }
    } else {
      message.reply(
        `It looks like you have already played today. You now have ${trickOrTreat.treats} :candy: and ${trickOrTreat.tricks} :smiling_imp:. There will be more candy up for grabs  tomorrow!`
      )
    }
  },
}
