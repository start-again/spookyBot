const { prefix } = require('../config.json')

let statusInterval = 0
if (process.env.NODE_ENV === 'dev') {
  statusInterval = 5000
} else {
  statusInterval = 60000
}

module.exports = async (bot) => {
  console.log(`Ready to serve ${bot.guilds.cache.reduce((mem, g) => (mem += g.memberCount), 0)} users`)
  setInterval(function () {
    let statuses = [
      `${bot.guilds.cache.reduce((mem, g) => (mem += g.memberCount), 0)} users`,
      `${bot.guilds.cache.size} servers`,
      `${prefix}help`,
    ]

    let status = statuses[Math.floor(Math.random() * statuses.length)]
    bot.user.setActivity(status, { type: 'WATCHING' })
  }, statusInterval)
}
