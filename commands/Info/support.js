const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')

module.exports = {
  config: {
    command: 'support',
    name: 'Support',
    description: 'Get the support server invitation link',
    usage: `${prefix}support`,
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setColor(colors.primary)
      .setAuthor('Support server', bot.user.avatarURL())
      .setDescription(
        'You can click on the following link for joining the support server: [https://discord.gg/nEDcagb](https://discord.gg/nEDcagb)'
      )

    message.channel.send(embed)
  },
}
