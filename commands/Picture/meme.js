const axios = require('axios').default
const { prefix } = require('../../config.json')

const SUBREDDIT_JSON_URL = 'https://reddit.com/r/spooktober/.json?count=30' // URL of the json containing last subreddit posts
const POST_HINT_IMG = 'image' // image post hint

module.exports = {
  config: {
    name: 'Spooky meme',
    usage: `${prefix}meme`,
    description: 'Posts a spooky meme as a picture. The image is fetched from reddit.com/r/spooktober',
    command: 'meme',
    displayHelp: true,
  },

  run: async (bot, message, args) => {
    const res = await axios.get(SUBREDDIT_JSON_URL)
    if (res.status != 200 || !res.data) {
      message.reply('Something failed.')
      return
    }

    const resData = res.data.data
    if (!resData) {
      message.reply('Nothing spooky has been found')
      return
    }

    // filter keeping image posts (as we can't do it via the API)
    const posts = resData.children.map((x) => x.data).filter((x) => x.post_hint === POST_HINT_IMG)
    if (!posts) {
      message.reply('No spooky image has been found')
      return
    }

    // selecting a random post
    const randomIdx = Math.floor(Math.random() * posts.length)
    const imageUrl = posts[randomIdx].url
    message.channel.send(imageUrl)
  },
}
