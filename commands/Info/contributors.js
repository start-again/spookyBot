const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')
const { version } = require('../../package.json')

module.exports = {
  config: {
    name: 'Contributors',
    usage: `${prefix}contributors`,
    description: 'Display the people who contributed to spooky.',
    command: 'contributors',
    aliases: ['contributors'],
    displayHelp: false,
  },

  run: async (bot, message, args) => {
    const contributors = await (await fetch("https://api.github.com/repos/LucasCtrl/spookyBot/contributors")).json()
    const embed = new MessageEmbed({
        title: "Contributors",
        description: "People who contributed code to this project."
    })
    contributors.forEach(element => {
        embed.addField(element.login, `(GitHub URL)[${element.url}]`)
    })

    message.channel.send(embed)
  },
}
