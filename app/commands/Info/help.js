const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config/config.json')
const { version } = require('../../../package.json')

module.exports = {
  config: {
    name: 'Help',
    usage: `${prefix}help`,
    description: 'Display this menu',
    command: 'help',
    aliases: ['h', 'commands', 'info'],
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    let embed = await new MessageEmbed()
      .setColor(colors.primary)
      .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
      .addField('\u200b', '📍  **INFORMATIONS**', false)
      .addField('Support', 'https://discord.gg/nEDcagb', true)
      .addField('Source code', 'https://github.com/LucasCtrl/spookyBot', true)
      .addField('🤖 Bot version', version, false)
      .addField('\u200b', '📍  **COMMANDS LIST**', false)

    bot.commands.forEach((c) => {
      if (c.config.displayHelp) {
        embed.addField(c.config.name, `${c.config.description}\n**Usage: **${c.config.usage}`, false)
      }
    })

    message.author.send(embed)
  },
}
