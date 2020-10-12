const { MessageEmbed } = require('discord.js')
const { colors } = require('../config/config.json')

const { createGuild } = require('../models/servers')

module.exports = (bot, webhook, guild) => {
  const embed = new MessageEmbed()
    .setColor(colors.success)
    .setTitle(`Join **${guild.name}** with ${guild.memberCount} users`)

  webhook.send(embed)
  console.log(`Join ${guild.name} with ${guild.memberCount} users`)

  createGuild(guild.id)
}
