const { splitWordsAndPunctuation, lowercaseAll, splitIntoSentences, countCommonEntries, isPalindrome, splitWordsWithoutPunctuation } = require('./utils');

// validation function should take in string
// validation functions should return a boolean (pass/fail)

// IMPORTANT: functions should handle the "cleaning" of sentences themselves using the sentenceSplitter functions
function validateIntro(input, rule) {
  const words = splitWordsWithoutPunctuation(lowercaseAll(input));
  return words.length >= 10 && rule.words.some(word => words.includes(word));
}

function validateWordInclusion(input, rule) {
  return rule.words.some(word => lowercaseAll.includes(word));
}

function validateSentenceInclusion(input, rule) {
  const sentences = splitIntoSentences(lowercaseAll(input));
  return rule.words.filter(word => sentences.some(sentence => sentence.includes(word))).length >= 2;
}

function validateAllLettersInclusion(input, rule) {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
  for (const char of lowercaseAll(input)) {
    if (alphabetSet.has(char)) {
      alphabetSet.delete(char)
    }
    if (alphabetSet.size === 0) {
      return true;
    }
  }
  return false;
}

function validatePalindromeInclusion(input, rule) {
  const words = input.splitWordsWithoutPunctuation(lowercaseAll(input));
  return words.some(word => isPalindrome(word));
}

module.exports = { validateIntro, validateWordInclusion, validateSentenceInclusion, validateAllLettersInclusion, validatePalindromeInclusion };