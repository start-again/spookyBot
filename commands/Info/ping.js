const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')

module.exports = {
  config: {
    command: 'ping',
    name: 'Ping',
    description: 'Average heart rate of the robot',
    usage: `${prefix}ping`,
    displayHelp: false,
  },

  run: async (bot, message, args) => {
    const beforePing = new MessageEmbed().setColor(colors.primary).setDescription('Pinging...')

    message.channel.send(beforePing).then((m) => {
      let ping = m.createdTimestamp - message.createdTimestamp

      const afterPing = new MessageEmbed()
        .setColor(colors.primary)
        .setDescription(`Pong! :ping_pong:\nBot Latency: \`${ping}ms\`, API Latency: \`${Math.round(bot.ws.ping)}ms\``)

      m.edit(afterPing)
    })
  },
}
