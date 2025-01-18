function randomInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

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

// Splits paragraph into subsentences separated by . ? !
function splitIntoSentences(input) {
  const sentences = input.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  return sentences ? sentences.map(sentence => sentence.trim()) : [];
}

// Counts number of common entries between two arrays
function countCommonEntries(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error("Both inputs must be arrays");
  }

  const map = new Map();
  let count = 0;

  // Count occurrences of elements in the first array
  for (const item of array1) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  // Count matches with the second array
  for (const item of array2) {
    if (map.has(item) && map.get(item) > 0) {
      count++;
      map.set(item, map.get(item) - 1); // Decrease the count to avoid duplicates
    }
  }
  return count;
}

// Returns true if palindrome
function isPalindrome(input) {
  return input.reverse() === input;
}

// Retuns true if two words are anagrams
// Unused
function areAnagrams(input1, input2) {
  if (input1.length !== input2.length) {
    return false;
  }
  const sortedWord1 = input1.split("").sort().join("");
  const sortedWord2 = input2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
}


module.exports = { randomInArray, lowercaseAll, splitWordsAndPunctuation, splitWordsWithoutPunctuation, splitIntoSentences, countCommonEntries, isPalindrome };