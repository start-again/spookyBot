module.exports = {
  configIsValid: (redditConf) => {
    return (
      redditConf && redditConf.userAgent && redditConf.clientId && redditConf.clientSecret && redditConf.refreshToken
    )
  },
  isPicture: (submission) => {
    return submission.url && submission.url.includes('https://i.redd.it')
  },
}
