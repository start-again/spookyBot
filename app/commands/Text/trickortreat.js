const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config/config.json')

const { treat, trick, createTrickOrTreat, getTrickOrTreat } = require('../../models/trickortreats')

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
    description: 'Gives you candy or scares you 😈',
    command: 'trickortreat',
    aliases: ['tot'],
    displayHelp: true,
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

        let embed = await new MessageEmbed()
          .setTitle(':smiling_imp: Oh no!, You have been tricked!')
          .setColor(colors.info)
          .setDescription('Better luck tomorrow!')
          .addField(':candy: Candys', trickOrTreat.treats, true)
          .addField(':smiling_imp: Treats', trickOrTreat.tricks, true)
          .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
          .setTimestamp(new Date())

        await message.channel.send(embed)
      } else {
        trickOrTreat = await treat(message.author.id)

        let embed = await new MessageEmbed()
          .setTitle(':candy: Sweet, sweet candy!')
          .setColor(colors.error)
          .setDescription('There will be more candy up for grabs tomorrow!')
          .addField(':candy: Candys', trickOrTreat.treats, true)
          .addField(':smiling_imp: Treats', trickOrTreat.tricks, true)
          .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
          .setTimestamp(new Date())

        await message.channel.send(embed)
      }
    } else {
      const embed = new MessageEmbed()
        .setTitle('It looks like you have already played today.')
        .setColor(colors.primary)
        .setDescription('There will be more candy up for grabs tomorrow!')
        .addField(':candy: Candys', trickOrTreat.tricks, true)
        .addField(':smiling_imp: Treats', trickOrTreat.treats, true)
        .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setTimestamp(new Date())

      message.channel.send(embed)
    }
  },
}
