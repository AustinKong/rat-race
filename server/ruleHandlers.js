const { splitWordsAndPunctuation, lowercaseAll } = require('./sentenceSplitters');

// validation function should take in string
// validation functions should return a boolean (pass/fail)

// IMPORTANT: functions should handle the "cleaning" of sentences themselves using the sentenceSplitter functions

function validateWordInclusion(input, rule) {
  const words = splitWordsAndPunctuation(lowercaseAll(input));
  return rule.words.some(word => words.includes(word));
}

module.exports = { validateWordInclusion };