const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config/config.json')

module.exports = {
  config: {
    command: 'invite',
    name: 'Invite',
    description: 'Get an invitation link for inviting the bot on your server',
    usage: `${prefix}invite`,
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
      .setColor(colors.primary)
      .setAuthor('Invitation link', bot.user.avatarURL())
      .setDescription(
        'You can click on the following link for adding the bot on your server: [https://discord.com/oauth2/authorize?client_id=761568927188123669&scope=bot&permissions=1141140544](https://discord.com/oauth2/authorize?client_id=761568927188123669&scope=bot&permissions=1141124160)'
      )

    message.channel.send(embed)
  },
}
