/*
{
  type: "word-inclusion" | ...,
  difficulty: integer,
  description: string,
  ...
}
*/

const rules = [
  // MUST BE FIRST QUESTION
  {
    id: 1,
    type: "wordInclusion",
    difficulty: 1,
    description: "Create a sentence with at least one of these words - \"teamwork\", \"communication\", \"synergy\".",
    words: [""]
  },
  {
    id: 2,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must include one of these words - \"manager\", \"developer\", or \"analyst\".",
    words: ["manager", "developer", "analyst"]
  },
  {
    id: 3,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must include a month of the year.",
    words: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  },
  {
    id: 4,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must mention a generic role with one of the following options - \"manager\", \"developer\", \"analyst\", \"engineer\", \"financial advisor\".",
    words: ["manager", "developer", "analyst", "engineer", "financial advisor"]
  },
  {
    id: 5,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must mention one of the past industries listed as follows - \"Aerospace\", \"Agriculture\", \"Automotive\", \"Banking\", \"Biotechnology\", \"Chemical\", \"Construction\", \"Civil Engineering\", \"Computing\", \"Defense\", \"Education\", \"Energy\", \"Entertainment\", \"Environmental Services\", \"Fashion\", \"Financial Services\", \"Food and Beverage\", \"Forestry\", \"Government\", \"Healthcare\", \"Hospitality\", \"Insurance\", \"Legal Services\", \"Logistics\", \"Manufacturing\", \"Maritime\", \"Marketing\", \"Media\", \"Mining\", \"Nonprofit\", \"Oil and Gas\", \"Pharmaceuticals\", \"Real Estate\", \"Renewable Energy\", \"Retail\", \"Shipping\", \"Sports\", \"Technology\", \"Telecommunications\", \"Textiles\", \"Tourism\", \"Transportation\".",
    words: ["Aerospace", "Agriculture", "Automotive", "Banking", "Biotechnology", "Chemical", "Construction", "Civil Engineering", "Computing", "Defense", "Education", "Energy", "Entertainment", "Environmental Services", "Fashion", "Financial Services", "Food and Beverage", "Forestry", "Government", "Healthcare", "Hospitality", "Insurance", "Legal Services", "Logistics", "Manufacturing", "Maritime", "Marketing", "Media", "Mining", "Nonprofit", "Oil and Gas", "Pharmaceuticals", "Real Estate", "Renewable Energy", "Retail", "Shipping", "Sports", "Technology", "Telecommunications", "Textiles", "Tourism", "Transportation"]
  },
  {
    id: 6,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your texts must include the phrase - \"I couldn’t have done without…\"",
    words: ["I couldn’t have done without…"]
  },
  {
    id: 7,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must mention at least 1 of the buzzwords - \"inspired\", \"determined\", \"growth\", \"development\", \"efficient\".",
    words: ["inspired", "determined", "growth", "development", "efficient"]
  },
  {
    id: 8,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must include a special character.",
    words: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]", ":", ";", "'", '"', "<", ">", ".", "?", "/", "|", "~", "`"]
  },
  {
    id: 9,
    type: "wordInclusion",
    difficulty: 1,
    description: "Your text must include the year \"2025\".",
    words: ["2025"]
  },
  {
    id: 10,
    type: "numberInclusion",
    difficulty: 1,
    description: "Your text must include a number denoting years of experience.",
  },
  {
    id: 11,
    type: "mathValidation",
    difficulty: 1,
    description: "Your text must include numbers adding up to at least 5.",
    number: 5
  },
  {
    id: 12,
    type: "mathValidation",
    difficulty: 1,
    description: "Your text must include numbers adding up to at least 12.",
    number: 12
  },
  {
    id: 13,
    type: "mathValidation",
    difficulty: 1,
    description: "Your text must include numbers adding up to at least 26.",
    number: 26
  },
  {
    id: 14,
    type: "mathValidation",
    difficulty: 1,
    description: "Your text must include numbers adding up to at least 37.",
    number: 37
  },
  {
    id: 15,
    type: "letterValidation",
    difficulty: 1,
    description: "Your sentence must start with an upper case letter.",
  },
  {
    id: 16,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include one of the phrases - \"Excited to\", \"Looking forward to\", \"Proud to\".",
    words: ["Excited to","Looking forward to", "Proud to"]
  },
  {
    id: 17,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include one of the phrases - \"Thank you\", \"share\", \"announce\".",
    words: ["Thank you", "share", "announce"]
  },
  {
    id: 18,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the phrase \"Regarding my recent work\".",
    words: ["Regarding my recent work"]
  },
  {
    id: 19,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the phrase \"Regarding this exciting opportunity\".",
    words: ["Regarding this exciting opportunity"]
  },
  {
    id: 20,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the phrase \"Regarding our latest achievement\".",
    words: ["Regarding our latest achievement"]
  },
  {
    id: 21,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the phrase \"As a result of\".",
    words: ["As a result of"]
  },
  {
    id: 22,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the hashtag \"#hacknroll2025\".",
    words: ["#hacknroll2025"]
  },
  {
    id: 23,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the hashtag \"#nushackers\".",
    words: ["#nushackers"]
  },
  {
    id: 24,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include nushackers LinkedIn \"https://www.linkedin.com/company/nus-hackers/\"",
    words: ["https://www.linkedin.com/company/nus-hackers/"]
  },
  {
    id: 25,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include one of the gold sponsor companies of HacknRoll 2025.",
    words: ["ahrefs", "OKX", "Marshall Wace", "ST Engineering" ]
  },
  {
    id: 26,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include one of the following companies - \"Grab\", \"DBS\", \"Singtel\".",
    words: ["Grab", "DBS", "Singtel"]
  },
  {
    id: 27,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include one of the following companies - \"THALES\", \"Intel\", \"AMD\", \"Deloitte\".",
    words: ["THALES", "Intel", "AMD", "Deloitte"]
  },
  {
    id: 28,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include the sentence \"I have made significant personal growth with this experience\".",
    words: ["I have made significant personal growth with this experience"]
  },
  {
    id: 29,
    type: "sentenceInclusion",
    difficulty: 2,
    description: "Your text must mention at least 2 of the buzzwords in a single sentence - dynamic, scalable, innovation, resilient, open-minded, ambitious, productivity, impact, opportunity, unity, community, teamwork, network, strategic, equality, digital transformation.",
    words: ["dynamic", "scalable", "innovation", "resilient", "open-minded", "ambitious", "productivity", "impact", "opportunity", "unity", "community", "teamwork", "network", "strategic", "equality", "digital transformation" ]
  },
  {
    id: 30,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must include one of the following acronyms and explain what it stands for - AGILE, KNY, SCRUM, DRY, DAC.",
    words: ["AGILE", "KNY", "SCRUM", "DRY", "DAC"]
  },
  {
    id: 31,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must mention the founding father of Singapore.",
    words: ["Lee Kuan Yew"]
  },
  {
    id: 32,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must mention an English phrase that has the words \"mother\" and \"failure\". \nHint: It\'s a Chinese proverb.",
    words: ["failure is the mother of success"]
  },
  {
    id: 33,
    type: "wordInclusion",
    difficulty: 2,
    description: "Your text must mention an English phrase that has the words \"journey\" and \"steps\".\nHint: It\'s a Chinese proverb.",
    words: ["A journey of a thousand miles begins with a single step"]
  }
];

module.exports = { rules };