const snoowrap = require('snoowrap')
const { MessageEmbed } = require('discord.js')
const { prefix, reddit } = require('../../config.json')

module.exports = {
  config: {
    name: 'Scary story',
    usage: `${prefix}story`,
    description: 'Tell a scary story (from reddit.com/r/scarystories)',
    command: 'story',
    aliases: ['ghoststory', 'tale'],
    displayHelp: false,
  },

  run: async (bot, message, args) => {
    if (!reddit || !reddit.userAgent || !reddit.clientId || !reddit.clientSecret || !reddit.refreshToken) {
      message.author.send("I can't tell you a story, no Reddit config provided.")
    } else {
      const retriever = new snoowrap({
        userAgent: reddit.userAgent,
        clientId: reddit.clientId,
        clientSecret: reddit.clientSecret,
        refreshToken: reddit.refreshToken,
      })

      const stories = await retriever.getSubreddit('scarystories').getHot()
      const story = stories[[Math.floor(Math.random() * stories.length)]]

      story.selftext.match(/(.|[\r\n]){1,2048}/g).forEach((storyPart, partIndex, parts) => {
        let embed = new MessageEmbed()
          .setColor('881EE4')
          .setTitle(`${story.title} (${partIndex + 1}/${parts.length})`)
          .setDescription(storyPart)
          .setFooter(`Author: ${story.author.name}`)
        message.channel.send(embed)
      })
    }
  },
}
