module.exports = {
  comment: 'Additional information: \
DISCLAIMER: The current version is just adding new emojis, words in English and a uniqueName field which is explained in the following text BUT later this file should be replaced with a template file that only contains the mapping of the emojis and uniqueName and for other languagese subfolders exist containing the mapping from unitqueName of the emoji to "words/expressions" that trigger the emoji.\
1. The overall idea behind this file is to provide a common mapping for an emoji to an unique name which can be then mapped to certain words, e.g. for "Happy Halloween!" you would like to see the "Jack-O-Lantern" emoji, but when typing "I really carved an awesome Jack-O-Lantern!" this is also the case. To achieve this mapping between the unique uniqueName of the emoji to certain words ("Halloween", "Jack-O-Lantern", "Pumpkin", "halloween", "pumpkin") the language specific files are used.\
So people who want to add a language do not have to search for all the emojis again and based on e.g. the English mapping can add their translation.\
\
Based on the emoji uniqueName it should also be possible to search for it on the internet to get more information, e.g. when an emoji might not be found you want to know why this does not work for you, and this is the reason for the following info.\
\
2. The list "emojiTemplateUniqueNameMappings" of emojis below (including their uniqueNames) was mostly taken from https://emojipedia.org/halloween/ and enhanced a bit with more emojis mentioned at the website, so using the uniqueName you should be able to find the emoji and background information on it (e.g. in which Unicode version was it introduced or what should the emoji mean).\
\
3. If you do not see some of the emojis this might be due to your used font as emojis are introduced in newer version of Unicode and not all fonts support the latest Unicode version.',
  lang: ['en',
  words: [
    {
      // Please do not delete this one 🙏
      name: ['spooky'],
      uniqueName: '_custom_spooky',
      emoji: '761602615326146590',
    },
    {
      name: ['alien'],
      uniqueName: 'Alien',
      emoji: '👽',
    },
    {
      name: ['alienmonster'],
      uniqueName: 'Alien Monster',
      emoji: '👾',
    },
    {
      name: ['heart'],
      uniqueName: 'Anatomical Heart',
      emoji: '🫀',
    },
    {
      name: ['angry devil'],
      uniqueName: 'Angry Face with Horns',
      emoji: '👿',
    },
    {
      name: ['anxious'],
      uniqueName: 'Anxious Face with Sweat',
      emoji: '😰',
    },
    {
      name: ['axe'],
      uniqueName: 'Axe',
      emoji: '🪓',
    },
    {
      name: ['bat'],
      uniqueName: 'Bat',
      emoji: '🦇',
    },
    {
      name: ['beating heart'],
      uniqueName: 'Beating Heart',
      emoji: '💓',
    },
    {
      name: ['black heart'],
      uniqueName: 'Black Heart',
      emoji: '🖤',
    },
    {
      name: ['black cat'],
      uniqueName: 'Black Cat',
      emoji: '🐈‍⬛',
    },
    {
      name: ['blood'],
      uniqueName: 'Blood',
      emoji: '🩸',
    },
    {
      name: ['drop of blood'],
      uniqueName: 'Drop of Blood',
      emoji: '🩸',
    },
    {
      name: ['bone'],
      uniqueName: 'Bone',
      emoji: '🦴',
    },
    {
      name: ['brain'],
      uniqueName: 'Brain',
      emoji: '🧠',
    },
    {
      name: ['broom'],
      uniqueName: 'Broom',
      emoji: '🧹',
    },
    {
      name: ['candle'],
      uniqueName: 'Candle',
      emoji: '🕯',
    },
    {
      name: ['candy'],
      uniqueName: 'Candy',
      emoji: '🍬',
    },
    {
      name: ['chains'],
      uniqueName: 'Chains',
      emoji: '⛓',
    },
    {
      name: ['chocolate bar'],
      uniqueName: 'Chocolate Bar',
      emoji: '🍫',
    },
    {
      name: ['cloud with lightning'],
      uniqueName: 'Cloud with Lightning',
      emoji: '🌩',
    },
    {
      name: ['clown'],
      uniqueName: 'Clown Face',
      emoji: '🤡',
    },
    {
      name: ['coffin'],
      uniqueName: 'Coffin',
      emoji: '⚰',
    },
    {
      name: ['crystral ball'],
      uniqueName: 'Crystal Ball',
      emoji: '🔮',
    },
    {
      name: ['dagger'],
      uniqueName: 'Dagger',
      emoji: '🗡',
    },
    {
      name: ['disguised'],
      uniqueName: 'Disguised Face',
      emoji: '🥸',
    },
    {
      name: ['abandoned house'],
      uniqueName: 'Derelict House',
      emoji: '🏚',
    },
    {
      name: ['ear'],
      uniqueName: 'Ear',
      emoji: '👂',
    },
    {
      name: ['eye'],
      uniqueName: 'Eye',
      emoji: '👁️',
    },
    {
      name: ['eyes'],
      uniqueName: 'Eyes',
      emoji: '👀',
    },
    {
      name: ['investigate'],
      uniqueName: 'Detective',
      emoji: '🕵',
    },
    {
      name: ['elf'],
      uniqueName: 'Elf',
      emoji: '🧝',
    },
    {
      name: ['scream'],
      uniqueName: 'Face Screaming in Fear',
      emoji: '😱',
    },
    {
      name: ['mummy'],
      uniqueName: 'Face with Head-Bandage',
      emoji: '🤕',
    },
    {
      name: ['fairy'],
      uniqueName: 'Fairy',
      emoji: '🧚',
    },
    {
      name: ['fear'],
      uniqueName: 'Fearful Face',
      emoji: '😨',
    },
    {
      name: ['fire'],
      uniqueName: 'Fire',
      emoji: '🔥',
    },
    {
      name: ['flying saucer'],
      uniqueName: 'Flying Saucer',
      emoji: '🛸',
    },
    {
      name: ['fog'],
      uniqueName: 'Fog',
      emoji: '🌫️',
    },
    {
      name: ['foot'],
      uniqueName: 'Foot',
      emoji: '🦶',
    },
    {
      name: ['footprints'],
      uniqueName: 'Footprints',
      emoji: '👣',
    },
    {
      name: ['full moon'],
      uniqueName: 'Full Moon',
      emoji: '🌕',
    },
    {
      name: ['funeral urn'],
      uniqueName: 'Funeral Urn',
      emoji: '⚱',
    },
    {
      name: ['genie'],
      uniqueName: 'Genie',
      emoji: '🧞',
    },
    {
      name: ['goblin'],
      uniqueName: 'Goblin',
      emoji: '👺',
    },
    {
      name: ['ghost'],
      uniqueName: 'Ghost',
      emoji: '👻',
    },
    {
      name: ['greenheart'],
      uniqueName: 'Green Heart',
      emoji: '💚',
    },
    {
      name: ['headstone'],
      uniqueName: 'Headstone',
      emoji: '🪦',
    },
    {
      name: ['high voltage'],
      uniqueName: 'High Voltage',
      emoji: '⚡',
    },
    {
      name: ['halloween', 'pumpkin', 'all hallows eve'],
      uniqueName: 'Jack-O-Lantern',
      emoji: '🎃',
    },
    {
      name: ['leg'],
      uniqueName: 'Leg',
      emoji: '🦵',
    },
    {
      name: ['lollipop'],
      uniqueName: 'Lollipop',
      emoji: '🍭',
    },
    {
      name: ['witcher'],
      uniqueName: 'Mage',
      emoji: '🧙',
    },
    {
      name: ['mermaid'],
      uniqueName: 'Mermaid',
      emoji: '🧜‍♀️',
    },
    {
      name: ['merman'],
      uniqueName: 'Merman',
      emoji: '🧜‍♂️',
    },
    {
      name: ['merperson'],
      uniqueName: 'Merperson',
      emoji: '🧜',
    },
    {
      name: ['new moon face'],
      uniqueName: 'New Moon Face',
      emoji: '🌚',
    },
    {
      name: ['night with stars'],
      uniqueName: 'Night with Stars',
      emoji: '🌃',
    },
    {
      name: ['ogre'],
      uniqueName: 'Ogre',
      emoji: '👹',
    },
    {
      name: ['orangeheart'],
      uniqueName: 'Orange Heart',
      emoji: '🧡',
    },
    {
      name: ['owl'],
      uniqueName: 'Owl',
      emoji: '🦉',
    },
    {
      name: ['disguises'],
      uniqueName: 'Performing Arts',
      emoji: '🥸',
    },
    {
      name: ['person in suit levitating'],
      uniqueName: 'Person In Suit Levitating',
      emoji: '🕴',
    },
    {
      name: ['princess'],
      uniqueName: 'Princess',
      emoji: '👸',
    },
    {
      name: ['robot'],
      uniqueName: 'Robot',
      emoji: '🤖',
    },
    {
      name: ['skull'],
      uniqueName: 'Skull',
      emoji: '💀',
    },
    {
      name: ['crossbones'],
      uniqueName: 'Skull and Crossbones',
      emoji: '☠',
    },
    {
      name: ['smiling devil'],
      uniqueName: 'Smiling Face with Horns',
      emoji: '😈',
    },
    {
      name: ['spider'],
      uniqueName: 'Spider',
      emoji: '🕷',
    },
    {
      name: ['web'],
      uniqueName: 'Spider Web',
      emoji: '🕸',
    },
    {
      name: ['tongue'],
      uniqueName: 'Tongue',
      emoji: '👅',
    },
    {
      name: ['unicorn'],
      uniqueName: 'Unicorn',
      emoji: '🦄',
    },
    {
      name: ['vampire'],
      uniqueName: 'Vampire',
      emoji: '🧛',
    },
    {
      name: ['wilted flower'],
      uniqueName: 'Wilted Flower',
      emoji: '🥀',
    },
    {
      name: ['female elf'],
      uniqueName: 'Woman Elf',
      emoji: '🧝‍♀️',
    },
    {
      name: ['female genie'],
      uniqueName: 'Woman Genie',
      emoji: '🧞‍♀️',
    },
    {
      name: ['witch'],
      uniqueName: 'Woman Mage',
      emoji: '🧙‍♀️',
    },
    {
      name: ['female vampire'],
      uniqueName: 'Woman Vampire',
      emoji: '🧛‍♀️',
    },
    {
      name: ['female zombie'],
      uniqueName: 'Woman Zombie',
      emoji: '🧟‍♀️',
    },
    {
      name: ['zombie'],
      uniqueName: 'Zombie',
      emoji: '🧟',
    }
  ],
}

