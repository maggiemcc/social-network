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

const emails = [
    "coding4fun@hotmail.com",
    "nosql@gmail.com",
    "bootcamp@gmail.com",
    "randomusername@gmail.com",
    "randomusername@gmail.com",
    "mycontact@gmail.com",
    "luvweekends@hotmail.com",
    "luv2eat@gmail.com",
    "luv2sleep@hotmail.com",
    "dreambig@hotmail.com",
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
const getRandomUsername = () => `${getRandomArrItem(first)}${getRandomArrItem(last)}`;
const getRandomFriend = () => `${getRandomArrItem(first)} ${getRandomArrItem(last)}`;
const getRandomEmail = () => `${getRandomArrItem(emails)}`;
const getRandomThought = () => `${getRandomArrItem(thoughts)}`;
const getRandomReaction = () => `${getRandomArrItem(reactions)}`;

module.exports = { getRandomUsername, getRandomEmail, getRandomThought, getRandomReaction, getRandomFriend};
