const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config/config.json')

const { readdirSync } = require('fs')
const { resolve } = require('path')

const { changeLang } = require('../../models/servers')

const ISOCode = require('../../utils/languageCode')

module.exports = {
  config: {
    command: 'setlang',
    name: 'Set bot language',
    description: 'Change the default bot language',
    usage: `${prefix}setlang <lang>`,
    displayHelp: true,
    permissionNeeded: 'ADMINISTRATOR',
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
      let messageContent = [
        'The requested language does not exist, please choose a language from this list: (the bold part)',
      ]
      availableLang.forEach((lang) => messageContent.push(`- **${lang}**: ${ISOCode.find((l) => l.code == lang).name}`))

      const embed = new MessageEmbed()
        .setColor(colors.primary)
        .setDescription(messageContent)
        .setFooter(
          "If you can't find your language, don't hesitate to contact us by using the command boo!support | This message will be deleted automatically"
        )

      message.channel.send(embed).then((m) => {
        setTimeout(() => {
          m.delete()
        }, 20000)
      })
    }
  },
}
