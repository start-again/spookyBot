const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')

const { readdirSync } = require('fs')
const { resolve } = require('path')

const { changeLang } = require('../../models/servers')

module.exports = {
  config: {
    command: 'setlang',
    name: 'Set bot language',
    description: 'Change the default bot language',
    usage: `${prefix}setlang <en|fr>`,
    displayHelp: false,
  },

  run: async (bot, message, args) => {
    // Get all available language
    let availableLang = []
    readdirSync(resolve(__dirname, `../../lang/`))
      .filter((d) => d.endsWith('.js'))
      .forEach((file) => {
        availableLang.push(file.slice(0, -3))
      })

    // Check if the language exist
    const newLang = availableLang.find((lang) => lang == args[0])

    if (newLang != undefined) {
      // The language exist
      const embed = new MessageEmbed().setColor(colors.primary).setDescription(`Language set to: **${args[0]}**`)
      message.channel.send(embed).then((m) => {
        setTimeout(() => {
          m.delete()
        }, 5000)
      })

      changeLang(message.guild.id, args[0])
    } else {
      // The language doesn't exist
      let messageContent = ['The requested language does not exist, please choose a language from this list:']
      availableLang.forEach((lang) => messageContent.push(`- **${lang}**`))

      const embed = new MessageEmbed()
        .setColor(colors.primary)
        .setDescription(messageContent)
        .setFooter('This message will be deleted automatically')

      message.channel.send(embed).then((m) => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }
  },
}
