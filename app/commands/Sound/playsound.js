const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../config/config.json')
const { readdirSync } = require('fs')
const { resolve } = require('path')

module.exports = {
  config: {
    name: 'Boo Sound',
    usage: `${prefix}booh`,
    description: 'Joins your voice channel and scares you',
    command: 'booh',
    aliases: ['buh', 'scare'],
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    if (message.member.voice.channel) {
      let soundPath = __dirname + `/../../sounds/`
      const connection = await message.member.voice.channel.join()
      const sounds = Array.from(readdirSync(resolve(__dirname, `../../sounds/`)))
      let playable = soundPath + sounds[Math.floor(Math.random() * sounds.length)]

      const dispatcher = connection.play(playable, {
        volume: 0.5,
      })

      dispatcher.on('finish', () => {
        connection.voice.channel.leave()
      })
    } else {
      const embed = new MessageEmbed()
        .setTitle('How can I scare your companions without you beeing present in the voice channel?')
        .setColor(colors.primary)

      message.channel.send(embed).then((m) => {
        setTimeout(() => {
          m.delete()
        }, 5000)
      })
    }
  },
}
