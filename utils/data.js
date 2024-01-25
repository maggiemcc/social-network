const fNames = [
    "Maggie",
    "Calvin",
    "Linda",
];
const lNames = [
    "McCausland",
    "Smith",
    "Jones",
];

const emails = [
    "coding4fun@hotmail.com",
    "nosql@gmail.com",
    "bootcamp@gmail.com",
    "username@gmail.com",
    "randomusername@gmail.com",
    "mycontact@gmail.com",
    "luvweekends@gmail.com",
    "luv2eat@gmail.com",
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

// Get random name
const getRandomUsername = () => `${getRandomArrItem(fNames)} ${getRandomArrItem(lNames)}`;
const getRandomEmail = () => `${getRandomArrItem(emails)}}`;
const getRandomThought = () => `${getRandomArrItem(thoughts)}}`;
const getRandomReaction = () => `${getRandomArrItem(reactions)}}`;

// // const getRandomUser = (int) => {
// //     const results = [];
// //     for (let i = 0; i < int; i++) {
// //         results.push({
// //             username: getRandomName(),
// //             email: getRandomEmail(),
// //             thoughts: getRandomThought(),
// //         });
// //     }
// //     return results;
// // };

// const getRandomThought= (int) => {
//     const results = [];
//     for (let i = 0; i < int; i++) {
//         results.push({
//             thoughtText: getRandomArrItem(thoughts),
//             reactions: [...getReactions(2)],
//         });
//     }
//     return results;
// };

// const getPostReactions= (int) => {
//     const results = [];
//     for (let i = 0; i < int; i++) {
//         results.push({
//             username: getRandomName(),
//             reactionBody: getRandomReaction(),
//         });
//     }
//     return results;
// };

module.exports = { getRandomUsername, getRandomEmail, getRandomThought, getRandomReaction};
