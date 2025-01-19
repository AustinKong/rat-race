/*
{
  type: "word-inclusion" | ...,
  difficulty: integer,
  description: string,
  ...
}
*/

const rules = [
// DIFFICULTY - EASY
// MUST BE FIRST QUESTION
  {
    id: 1,
    type: "intro",
    difficulty: 1,
    description: "Create a sentence with at least 10 words and containing one of these words - \"teamwork\", \"communication\", \"synergy\".",
    wordCount:10,
    words: ["teamwork", "communication", "synergy"]
  },
  {
    id: 2,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must include one of these words - \"manager\", \"developer\", or \"analyst\".",
    words: ["manager", "developer", "analyst"]
  },
  {
    id: 3,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must include a month of the year.",
    words: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  },
  {
    id: 4,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must mention a generic role with one of the following options - \"manager\", \"developer\", \"analyst\", \"engineer\", \"financial advisor\".",
    words: ["manager", "developer", "analyst", "engineer", "financial advisor"]
  },
  {
    id: 5,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must mention one of the past industries listed as follows - \"Aerospace\", \"Agriculture\", \"Banking\", \"Chemical\", \"Computing\", \"Defense\", \"Education\", \"Entertainment\", \"Environmental Services\", \"Food and Beverage\", \"Forestry\", \"Government\", \"Insurance\", \"Logistics\", \"Manufacturing\", \"Marketing\", \"Media\", \"Pharmaceuticals\", \"Real Estate\", \"Retail\", \"Tourism\".",
    words: ["aerospace", "agriculture", "banking", "chemical", "computing", "defense", "education", "entertainment", "environmental services", "food and beverage", "forestry", "government", "insurance", "logistics", "manufacturing", "marketing", "media", "pharmaceuticals", "real estate", "retail", "tourism"]
  }, 
  {
    id: 6,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your posts must include the phrase - \"I couldn't have done without\"",
    words: ["i couldn't have done without"]
  },
  {
    id: 7,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must mention at least 1 of the buzzwords - \"inspired\", \"determined\", \"growth\", \"development\", \"efficient\".",
    words: ["inspired", "determined", "growth", "development", "efficient", "perseverance", "respectful", "tech-savvy", "dedication", "milestone", "achievement."]
  },
  {
    id: 8,
    type: "characterInclusion",
    difficulty: 1,
    description: "Your post must include a special character.",
    characters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ".", "?", "/", "|", "~", "`"]
  },
  {
    id: 9,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must include the year \"2025\".",
    words: ["2025"]
  },
  {
    id: 10,
    type: "numberInclusion",
    difficulty: 1,
    description: "Your post must include a number denoting years of experience.",
  },
  {
    id: 11,
    type: "mathValidation",
    difficulty: 1,
    description: "Your post must include numbers adding up to at least 5.",
    number: 5
  },
  {
    id: 12,
    type: "mathValidation",
    difficulty: 1,
    description: "Your post must include numbers adding up to at least 15.",
    number: 15
  },
  {
    id: 13,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must contain letters 'a', 'e', 'i', 'o', 'u'.",
    words: ["a", "e", "i", "o", "u"]
  },
  {
    id: 14,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must mention one of the past industries listed as follows - \"Automotive\", \"Advertising\", \"Biotechnology\", \"Construction\", \"Exotic dancer\", \"Fashion\", \"Maritime\", \"Shipping\", \"Telecommunications\", \"Healthcare\",\"Legal services\", \"Non-profit\".",
    words: ["automotive", "advertising", "biotechnology", "construction", "exotic dancer", "fashion", "maritime", "quantitative finance", "shipping", "telecommunications", "healthcare", "legal services", "non-profit"]
  },
  {
    id: 15,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your post must mention one of the past industries listed as follows -  \"Architecture\", \"Accounting\", \"Civil engineering\", \"Energy\", \"Financial services\", \"Telecommunications\", \"Technology\", \"Mining\", \"Oil and Gas\", \"Sports \", \"Private equity\", \"Music\", \"Venture Capital\".",
    words: ["architecture", "accounting", "civil engineering", "energy", "financial services", "telecommunications", "technology", "mining", "oil and gas", "sports", "private equity", "music", "venture capital"]

  },
  {
    id: 16,
    type: "wordInclusion",
    difficulty: 1,
    description: "Include the word 'algorithm' in a motivational sentence",
    words: ["algorithm"]
  },
  {
    id: 18,
    type: "wordInclusion",
    difficulty: 1,
    description: "Include a simple comparison operator in a sentence.",
    words: [">", "<", "==", "!=", "<=", ">="]
  },
  {
    id: 19,
    type: "wordInclusion",
    difficulty: 1,
    description: "Use a sports term like 'goal', 'home run', or 'slam dunk' in your post.",
    words: ["goal", "home run", "slam dunk"]
  },
  {
    id: 20,
    type: "wordInclusion",
    difficulty: 1,
    description: "Include the name of one of these sports (basketball, soccer, F1, marathon, water polo, tennis) and how it relates to resilience.",
    words: ["basketball", "soccer", "F1", "marathon", "water polo", "tennis"]
  },
  {
    id: 21,
    type: "wordInclusion",
    difficulty: 1,
    description: "Mention how Harry Potter inspired you to be a better person",
    words: ["Harry Potter"]
  },
  {
    id: 22,
    type: "wordInclusion",
    difficulty: 1,
    description: "Use a cooking term like 'stirring the pot' or 'adding spice' in a metaphor.",
    words: ["stirring the pot", "adding spice"]
  },
  {
    id: 23,
    type: "wordInclusion",
    difficulty: 1,
    description: "Use the term 'gravity' in a sentence about staying grounded.",
    words: ["gravity"]
  },
  {
    id: 24,
    type: "wordInclusion",
    difficulty: 1,
    description: "Use the words 'stars' or 'universe' in a motivational sentence.",
    words: ["stars", "universe"]
  },
  {
    id: 25,
    type: "wordInclusion",
    difficulty: 1,
    description: "Include one of the following animals in a sentence that signifies courage - tiger, lion, eagle, boar, horse.",
    words: ["tiger", "lion", "eagle", "boar", "horse" ]
  },
  {
    id: 26,
    type: "wordInclusion",
    difficulty: 1,
    description: "Include one of the following animals in a sentence that signifies teamwork - ants, elephants, wolves, bees, dolphins.",
    words: ["ants", "elephants", "wolves", "bees", "dolphins"]
  },
  {
    id: 27,
    type: "wordInclusion",
    difficulty: 1,
    description: "Use the phrase 'a breath of fresh air' in a motivational sentence.",
    words: ["a breath of fresh air"]
  },
  {
    id: 28,
    type: "wordInclusion",
    difficulty: 1,
    description: "Write about how Charlotte in Charlotte's Web inspired you to be a better person.",
    words: ["charlotte"]
  },



  // {
  //   id: ,
  //   type: "mathValidation",
  //   difficulty: 1,
  //   description: "Your post must include numbers adding up to at least 12.",
  //   number: 12
  // },
  // {
  //   id: ,
  //   type: "mathValidation",
  //   difficulty: 1,
  //   description: "Your post must include numbers adding up to at least 26.",
  //   number: 26
  // },

 // DIFFICULTY - MEDIUM
  {
    id: 101,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include one of the phrases - \"Excited to\", \"Looking forward to\", \"Proud to\".",
    words: ["excited to","looking forward to", "proud to"]
  },
  {
    id: 102,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include one of the phrases - \"Thank you\", \"share\", \"announce\".",
    words: ["thank you", "share", "announce"]
  },
  {
    id: 103,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the phrase \"Regarding my recent work\".",
    words: ["regarding my recent work"]
  },
  {
    id: 104,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the phrase \"Regarding this exciting opportunity\".",
    words: ["regarding this exciting opportunity"]
  },
  {
    id: 105,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the phrase \"Regarding our latest achievement\".",
    words: ["regarding our latest achievement"]
  },
  {
    id: 106,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the phrase \"As a result of\".",
    words: ["As a result of"]
  },
  {
    id: 107,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the hashtag \"#hacknroll2025\".",
    words: ["#hacknroll2025"]
  },
  {
    id: 108,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the hashtag \"#nushackers\".",
    words: ["#nushackers"]
  },
  {
    id: 109,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include nushackers LinkedIn \"https://www.linkedin.com/company/nus-hackers/\"",
    words: ["https://www.linkedin.com/company/nus-hackers/"]
  },
  {
    id: 110,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include one of the gold sponsor companies of HacknRoll 2025.",
    words: ["ahrefs", "okx", "marshall wace", "st engineering" ]
  },
  {
    id: 111,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include one of the following companies - \"Grab\", \"DBS\", \"Singtel\".",
    words: ["grab", "dbs", "singtel"]
  },
  {
    id: 112,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the sentence \"I have made significant personal growth with this experience\".",
    words: ["i have made significant personal growth with this experience"]
  },
  {
    id: 113,
    type: "sentenceInclusion",
    difficulty: 2,
    description: "Your post must mention at least 2 of the buzzwords in a single sentence - dynamic, scalable, innovation, open-minded, ambitious, productivity, impact, opportunity, unity, community, teamwork, network, strategic, equality, digital transformation.",
    words: ["dynamic", "scalable", "innovation", "open-minded", "ambitious", "productivity", "impact", "opportunity", "unity", "community", "teamwork", "network", "strategic", "equality", "digital transformation" ]
  },
  {
    id: 114,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include one of the following acronyms and explain what it stands for - AGILE, KNY, SCRUM, DRY, DAC.",
    words: ["agile", "kny", "scrum", "dry", "dac"]
  },
  {
    id: 115,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must mention the founding father of Singapore.",
    words: ["lee kuan yew"]
  }, 
  {
    id: 116,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must mention an English phrase that has the words \"journey\" and \"steps\".\nHint: It\'s a Chinese proverb.",
    words: ["a journey of a thousand miles begins with a single step"]
  },
  {
    id: 117,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must mention a European country.",
    words: ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Türkiye", "Ukraine", "United Kingdom", "Vatican City"]
  }, 
  {
    id: 118,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the anagram of 'sleuth'.",
    words: ["hustle"]

  },
  {
    id: 119,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the unscrambled version of 'rihtev'.",
    words: ["thrive"]

  },
  {
    id: 120,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the anagram of 'verdin'.",
    words: ["driven"]
  },
  {
    id: 121,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the unscrambled word of 'orhwgt'.",
    words: ["growth"]
  },
  {
    id: 122,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the anagram of 'cussses'.",
    words: ["success"]
  }, 
  {
    id: 123,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the english word of the foreign word 'líder'",
    hint: "It's a portuguese word.",
    words: ["leader"]
  }, 
  {
    id: 124,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must contain the word provided in this captcha.",
    words: ["resilient"]
  },
  {
    id: 125,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post should include the food 'lo hei'.",
    words: ["lo hei"]
  }, 
  {
    id: 126,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post should include the food 'kueh lapis'.",
    words: ["kueh lapis"]
  },
  {
    id: 128,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include three consecutive 😁 emojis.",
    words: ["😁😁😁"]
  },
  {
    id: 129,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include three consecutive 💡 emojis.",
    words: ["💡💡💡"]
  },
  {
    id: 130,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include one of these 🧠, 🤔, 😍 emojis.",
    words: ["🧠", "🤔", "😍"]
  },
  {
    id: 131,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include at least one 🌟 emoji.",
    words: ["🌟"]
  },
  {
    id: 132,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include exactly two 🥳 emojis in a row.",
    words: ["🥳🥳"]
  },
  {
    id: 133,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the 🎉 emoji anywhere in the text.",
    words: ["🎉"]
  },
  {
    id: 134,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your post must include the sequence 🔥🔥🔥🔥🔥.",
    words: ["🔥🔥🔥🔥🔥"]
  },

  // DIFFICULTY - HARD
  {
    id: 201,
    type: "letterInclusion",
    difficulty: 3,
    description: "Your post must include all letters from A to Z.",
  },
  {
    id: 202,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must mention an English phrase that has the words \"mother\" and \"failure\". \nHint: It\'s a Chinese proverb.",
    words: ["failure is the mother of success"]
  },
  {
    id: 203,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must mention South Africa's first democratically elected president.",
    words: ["nelson mandela"]
  },
  {
    id: 204,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the coefficient of x of this differentiation question - d/dx(12x^2 - 5x + 9)",
    number: 5
  },
  {
    id: 205,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the constant of this differentiation question - d/dx(37x^3 - 20x^2 + 3x + 1)",
    number: 3
  }, 
  {
    id: 206,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must contain the english word of the foreign word 'motivatsiya'",
    hint: "It's a russian word.",
    word: ["motivation"]
  }, 
  {
    id: 207,
    type: "wordExclusion",
    difficulty: 3,
    description: "Your post must not include numbers 3, 4, 7 and 9.",
    words: ["3", "4", "7", "9"]
  },
  {
    id: 208,
    type: "wordExclusion",
    difficulty: 3,
    description: "Your post must not include words 'mindset', 'always', 'very', 'shared'.",
    words: ["mindset", "always", "very", "shared"]
  },
  {
    id: 209,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must mention the number of years that have passed since the establishment of the National University of Singapore (NUS) in 2025.",
    number: 120
  },
  {
    id: 210,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the name of the philanthropist that paid for Chadwick Boseman's summer theatre program at the University of Oxford.",
    words: ["denzel washington"]
  },
  {
    id: 211,
    type: "wordInclusion",
    difficulty: 3,
    description: "\"I think the greatest way to win the rat race is to give a false sense of our weaknesses and strengths\". Your post must include a quote from the book titled 'The Art of War' that supports this argument.",
    words: ["appear weak when you are strong, and strong when you are weak"]
  },
  {
    id: 212,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the name of the entrepreneur that dropped out of school when he was 16 due to severe dyslexia.",
    words: ["richard branson"]
  },
  {
    id: 213,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the word in the CAPTCHA image.",
    words: ["hustle"]
  },
  {
    id: 214,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the word in the CAPTCHA image.",
    words: ["insights"]
  },
  {
    id: 215,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the word in the CAPTCHA image.",
    words: ["reflect"]
  },
  {
    id: 216,
    type: "wordInclusion",
    difficulty: 3,
    description: "Your post must include the entrepreneur that re-invented Singapore’s local gaming industry.",
    words: ["tan min liang"]
  } ,
  {
    id: 217,
    type: "wordInclusion",
    difficulty: 3,
    description: "Include a hastag within your post - #grateful or #blessed.",
    words: ["#grateful", "#blessed"]
  },
  {
    id: 218,
    type: "wordInclusion",
    difficulty: 3,
    description: "Name-drop the artist whose ear was cut off.",
    words: ["vincent van gogh"]
  },
  {
    id: 219,
    type: "wordInclusion",
    difficulty: 3,
    description: "Name-drop the individual who served as the British Prime minister twice and also received a Nobel Prize in Literature. Talk about how this individual inspired you.",
    words: ["winston churchill"]
  },
  {
    id: 220,
    type: "wordInclusion",
    difficulty: 3,
    description: "Name-drop the famous musician who lost his hearing. Talk about how this individual taught you about perserverance.",
    words: ["ludwig van beethoven"]
  },
  {
    id: 221,
    type: "wordInclusion",
    difficulty: 3,
    description: "Name-drop the famous musician who lost his hearing. Talk about how this individual taught you about perserverance.",
    words: ["ludwig van beethoven"]
  },
  {
    id: 222,
    type: "wordInclusion",
    difficulty: 3,
    description: "Include the name of the painting that has been stolen multiple times and have been recovered. Relate it to mystery of your life",
    words: ["mona lisa"]
  },
  {
    id: 223,
    type: "wordInclusion",
    difficulty: 3,
    description: "Include the name of the famous scientist who tried to turn lead into gold. Relate it to your journey of turning failures into success.",
    words: ["glenn seaborg"]
  },
  {
    id: 224,
    type: "wordInclusion",
    difficulty: 3,
    description: "Include the name of the famous scientist who failed 1000 times before inventing the lightbulb. Relate it to perserverance in your life.",
    words: ["thomas edison"]
  },


];

module.exports = { rules };



