const { validateWordInclusion } = require('./ruleHandlers');
const axios = require('axios');
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");


/* ------------------------------------------------------------------------ */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: "You are reviewing a linkedin post that will be posted, look through the reply and output a \"valid\" if you think this post makes sense in the context as a linkedin post, else output \"invalid\".",
});

const generationConfig = {
  temperature: 0,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function checkContext(text) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(text);
  console.log(text, " ran thru the model gives result ", result);
  return result;
}

/* ------------------------------------------------------------------------ */

const GRAMMAR_CHECKER_URL = 'https://api.languagetoolplus.com/v2/check';
async function checkGrammar(text) {
  try {
    const response = await axios.post(
      `${GRAMMAR_CHECKER_URL}?language=en-US&text=${text}`
    );

    const matches = response.data.matches;
    return matches;
  } catch (error) {
    console.error('Error with LanguageTool API:', error);
  }
}

/* ------------------------------------------------------------------------ */

async function evaluateInput(input, rules) {
  const results = [];

  // Checks for number of grammar issues
  const matches = await checkGrammar(input);
  results.push({ 
    rule: { type: "grammarCheck", description: "Checks whether grammar is valid." },
    valid: matches.length > 0
  });

  // Checks for challenge rules
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

  // Uses Gemini to check if the text fits in the context of a Linkedin post
  const contextCheckResult = await checkContext(input);
  results.push({
    rule: { type: "contextCheck", description: "Checks whether your text fits in the context of LinkedIn post." },
    valid: contextCheckResult === "valid"
  })

  return results;
}

module.exports = { evaluateInput }
