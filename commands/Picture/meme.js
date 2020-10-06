const snoowrap = require('snoowrap')
const redditHelper = require('../../utils/redditHelper.js')
const { prefix, reddit } = require('../../config.json')
const { isPicture } = require('../../utils/redditHelper.js')

const SUBREDDIT_NAME = 'spooktober'

module.exports = {
  config: {
    name: 'Spooky meme',
    usage: `${prefix}meme`,
    description: 'Posts a spooky meme as a picture. The image is fetched from reddit.com/r/spooktober',
    command: 'meme',
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    if (!redditHelper.configIsValid(reddit)) {
      message.reply(':ghost: No reddit config found. Please check the README.md to provide one.')
      return
    }

    const retriever = new snoowrap({
      userAgent: reddit.userAgent,
      clientId: reddit.clientId,
      clientSecret: reddit.clientSecret,
      refreshToken: reddit.refreshToken,
    })

    const submissions = await retriever.getSubreddit(SUBREDDIT_NAME).getHot()
    const imageSubmissions = submissions.filter((x) => !x.over_18 && !x.spoiler && redditHelper.isPicture(x))
    const randomIdx = Math.floor(Math.random() * imageSubmissions.length)
    const randSubmission = imageSubmissions[randomIdx]

    console.log(imageSubmissions)
    if (randSubmission) message.channel.send(randSubmission.url)
    else message.channel.send(':ghost: No spooky meme found')
  },
}
