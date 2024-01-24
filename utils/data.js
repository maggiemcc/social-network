const firstNames = [
    "Maggie",
    "Calvin",
    "Linda",
];

const lastNames = [
    "McCausland",
    "Smith",
    "Jones",
];

const emails = [
    "maggiemccausland@hotmail.com",
    "coding4fun@hotmail.com",
    "nosql@gmail.com",
];

const thoughts = [
    "Where can we find the courage to act in spite of fear?",
    "How do you invest in developing leadership but not in creating dependency of that leadership upon you?",
    "Hope is the belief in the probability of the possible rather than the necessity of the probable.",
];

const reactions = [
    "Fantastic",
    "Funny",
    "WOW",
    "Wonderful",
    "I disagree",
    "I agree!"
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomName = () => `${getRandomArrItem(firstNames)} ${getRandomArrItem(lastNames)}`;
const getRandomEmail = () => `${getRandomArrItem(emails)}}`;
const getRandomThought = () => `${getRandomArrItem(thoughts)}}`;
const getRandomReaction = () => `${getRandomArrItem(reactions)}}`;

const getRandomUser = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            username: getRandomName(),
            email: getRandomEmail(),
            thoughts: getRandomThought(),
        });
    }
    return results;
};

const getRandomPost= (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomThought(),
            reactions: [...getPostReactions(2)],
        });
    }
    return results;
};

const getPostReactions= (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            username: getRandomName(),
            reaction: getRandomReaction(),
        });
    }
    return results;
};

module.exports = { getRandomUser, getRandomPost, getPostReactions };
