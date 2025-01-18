// Turns sentence into lowercase
function lowercaseAll(input) {
  return input.toLowerCase();
}

// Splits sentence into words with punctuation as their own words
function splitWordsAndPunctuation(input) {
  const words = input.match(/\w+|[.,!?;()&%$#@]/g);
  return words || [];
}

// Splits sentence into words stripping punctuation
function splitWordsWithoutPunctuation(input) {
  const cleanedInput = input.replace(/[.,!?;()]/g, '');
  const words = cleanedInput.split(/\s+/);
  return words;
}

module.exports = { lowercaseAll, splitWordsAndPunctuation, splitWordsWithoutPunctuation };