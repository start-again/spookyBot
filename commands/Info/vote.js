const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')

module.exports = {
  config: {
    command: 'vote',
    name: 'Vote',
    description: 'Vote for the bot',
    usage: `${prefix}vote`,
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setColor(colors.primary)
      .setAuthor('Support server', bot.user.avatarURL())
      .setDescription(
        'You can vote for the bot by clicking on the following link: [https://discordbotlist.com/bots/spookybot/upvote](https://discordbotlist.com/bots/spookybot/upvote)'
      )

    message.channel.send(embed)
  },
}
