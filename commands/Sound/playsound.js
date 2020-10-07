const { prefix } = require('../../config.json')
const { readdirSync } = require('fs')
const { resolve } = require('path')

module.exports = {
  config: {
    name: 'Boo Sound',
    usage: `${prefix}booh`,
    description: 'Display this menu',
    command: 'booh',
    aliases: ['buh', 'scare'],
    displayHelp: false,
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
      message.author.send('How can I scare your companions without you beeing present in the voice channel?')
    }
  },
}
