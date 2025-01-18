const { validateWordInclusion } = require('./ruleHandlers');
const axios = require('axios');

const GRAMMAR_CHECKER_URL = 'https://api.languagetoolplus.com/v2/check';

async function checkGrammar(text) {
  try {
    const response = await axios.post(
      `${GRAMMAR_CHECKER_URL}?language=en-US&text=${text}`
    );

    // Handle the response
    const matches = response.data.matches;
    
    if (matches.length > 0) {
      console.log('Grammar Issues Found:');
      matches.forEach(issue => {
        console.log(`- Issue: ${issue.message}`);
        console.log(`  Suggestion: ${issue.replacements.map(r => r.value).join(', ')}`);
      });
    } else {
      console.log('No grammar issues found!');
    }
  } catch (error) {
    console.error('Error with LanguageTool API:', error);
  }
}

function evaluateInput(input, rules) {
  checkGrammar(input);

  const results = [];
  rules.forEach(rule => {
    let isValid;
    switch (rule.type) {
      case "wordInclusion":
        isValid = validateWordInclusion(input, rule);
        break;
      default:
        isValid = true;
    }
    results.push({
      rule,
      valid: isValid
    })
  })

  return results;
}

module.exports = { evaluateInput }
