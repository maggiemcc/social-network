const first = [
    "Maggie",
    "Calvin",
    "Linda",
    "Jill",
    "Stacy",
    "Brett",
    "Scott",
    "Ryan",
    "Trent",
];
const last = [
    "McCausland",
    "Smith",
    "Jones",
    "Davis",
    "Anderson",
];

const emailNames = [
    "coding4fun",
    "nosql",
    "bootcamp",
    "randomusername",
    "randomusername",
    "mycontact",
    "luvweekends",
    "luv2eat",
    "luv2sleep",
    "dreambig",
];

const emails = [
    "@hotmail.com",
    "@gmail.com",
    "@yahoo.com",
];

const thoughts = [
    "Where can we find the courage to act in spite of fear?",
    "How do you invest in developing leadership but not in creating dependency of that leadership upon you?",
    "Hope is the belief in the probability of the possible rather than the necessity of the probable.",
    "Who begins too much accomplishes little.",
    "I shut my eyes in order to see.",
    "Common sense is the best sense I know of.",
    "I once wanted to become an atheist, but I gave up - they have no holidays.",
    "If all the world's a stage, I want to operate the trap door."
];

const reactions = [
    "Fantastic",
    "Funny",
    "WOW",
    "Wonderful",
    "I disagree",
    "I agree!",
    "Interesting..."
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get random name
const getRandomUsername = () => `${getRandomArrItem(first)}${getRandomArrItem(last)}${Math.floor(Math.random() * (20 - 3 + 7) + 22)}`;
const getRandomEmail = () => `${getRandomArrItem(emailNames)}${Math.floor(Math.random() * (20 - 3 + 7) + 22)}${getRandomArrItem(emails)}`;
const getRandomThought = () => `${getRandomArrItem(thoughts)}`;

const getRandomFriend = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        friendName: `${getRandomArrItem(first)} ${getRandomArrItem(last)}`,
      });
    }
    return results;
  };

  const getRandomReaction = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions),
      });
    }
    return results;
  };

  // const getRandomThought = (int) => {
  //   const results = [];
  //   for (let i = 0; i < int; i++) {
  //     results.push({
  //       thoughtText: getRandomArrItem(thoughts),
  //     });
  //   }
  //   return results;
  // };

module.exports = { getRandomUsername, getRandomEmail, getRandomThought, getRandomReaction, getRandomFriend};
