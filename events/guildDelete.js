const { MessageEmbed } = require('discord.js')
const { colors } = require('../config.json')

const { deleteGuild } = require('../models/servers')

module.exports = (bot, webhook, guild) => {
  const embed = new MessageEmbed()
    .setColor(colors.error)
    .setTitle(`Leave **${guild.name}** with ${guild.memberCount} users`)

  webhook.send(embed)
  console.log(`Leave ${guild.name} with ${guild.memberCount} users`)

  deleteGuild(guild.id)
}
