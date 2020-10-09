const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')

module.exports = {
  config: {
    command: 'stats',
    name: 'Stat',
    description: 'Give you some statistics about the bot',
    usage: `${prefix}stats`,
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    const memoryStats = process.memoryUsage()

    const embed = new MessageEmbed()
      .setColor(colors.primary)
      .setAuthor(`Stats - ${bot.user.username}`, bot.user.avatarURL({ dynamic: true }))
      .addField('Number of servers ¬', bot.guilds.cache.size.toLocaleString(), true)
      .addField(
        'Number of users ¬',
        bot.guilds.cache.reduce((mem, g) => (mem += g.memberCount), 0),
        true
      )
      .addField('Number of emojis ¬', bot.emojis.cache.size, true)
      .addField('Number of channels ¬', bot.channels.cache.size, true)
      .addField('Memory usage ¬', `${Math.ceil(memoryStats.heapUsed / 1048576)} Mo`, true)
      .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))

    message.channel.send(embed)
  },
}
