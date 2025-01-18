const { splitWordsAndPunctuation, lowercaseAll, splitIntoSentences, countCommonEntries, isPalindrome } = require('./utils');

// validation function should take in string
// validation functions should return a boolean (pass/fail)

// IMPORTANT: functions should handle the "cleaning" of sentences themselves using the sentenceSplitter functions

function validateWordInclusion(input, rule) {
  const words = splitWordsAndPunctuation(lowercaseAll(input));
  return rule.words.some(word => words.includes(word));
}

function validateSentenceInclusion(input, rule) {
  const wordsGroupedBySentences = splitIntoSentences(lowercaseAll(input)).map(sentence => sentence.splitWordsAndPunctuation(sentence));
  return wordsGroupedBySentences.some(sentence => countCommonEntries(sentence, rule.words) >= 2);
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

function validatePalindromInclusion(input, rule) {
  const words = input.splitIntoSentences(lowercaseAll(input));
  return words.some(word => isPalindrome(word));
}

module.exports = { validateWordInclusion, validateSentenceInclusion, validatePalindromInclusion };