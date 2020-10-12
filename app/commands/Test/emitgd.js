module.exports = {
  config: {
    command: 'emitgc',
    description: 'guildCreate event',
  },

  run: async (bot, message, args) => {
    bot.emit('guildCreate', message.guild)
  },
}
