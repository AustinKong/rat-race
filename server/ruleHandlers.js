const { splitWordsAndPunctuation, lowercaseAll, splitIntoSentences, countCommonEntries, isPalindrome, splitWordsWithoutPunctuation } = require('./utils');

// validation function should take in string
// validation functions should return a boolean (pass/fail)

// IMPORTANT: functions should handle the "cleaning" of sentences themselves using the sentenceSplitter functions
function validateIntro(input, rule) {
  const words = splitWordsWithoutPunctuation(lowercaseAll(input));
  return words.length >= 10 && rule.words.some(word => words.includes(word));
}

function validateWordInclusion(input, rule) {
  return rule.words.some(word => lowercaseAll(input).includes(lowercaseAll(word)));
}

function validateWordExclusion(input, rule) {
  return !rule.words.some(word => lowercaseAll(input).includes(lowercaseAll(word)));
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

function validateCharacters(input, rule) {
  return rule.characters.some(char => input.includes(char));
}

function validateNumber(input, rule) {
  const numberRegex = /\d/; // Matches any digit (0-9)
  return numberRegex.test(input);
}

// Sum
function validateMath(input, rule) {
  const numbers = input.match(/\d+/g) || []; // Match one or more digits, or default to an empty array
  const totalSum = numbers.map(Number).reduce((sum, num) => sum + num, 0);
  return totalSum >= rule.number;
}

module.exports = { validateIntro, validateWordInclusion, validateSentenceInclusion, validateAllLettersInclusion, validatePalindromeInclusion, validateCharacters, validateNumber, validateMath, validateWordExclusion };