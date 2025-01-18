/*
{
  type: "word-inclusion" | ...,
  difficulty: integer,
  description: string,
  ...
}
*/

const rules = [
  {
    type: "wordInclusion",
    difficulty: 1,
    description: "Word inclusion test 1",
    words: ["manager", "developer", "analyst"]
  },
  {
    type: "wordInclusion",
    difficulty: 1,
    description: "Word inclusion test 1",
    words: ["manager", "developer", "analyst"]
  }
];

module.exports = { rules };