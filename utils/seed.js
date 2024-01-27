// const connection = require('../config/connection');
// const { User, Thought } = require('../models');
// const { getRandomUsername, getRandomEmail, getRandomThought, getRandomReaction, getRandomFriend } = require('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//     console.log('connected');

//     let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
//     if (usersCheck.length) {
//         await connection.dropCollection('users');
//     };

//     let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
//     if (thoughtCheck.length) {
//         await connection.dropCollection('thoughts');
//     };


//     const users = [];
//     // const thoughts = [];

//     const today = Date.now();
//     function formatDate(today) {return new Date(today).toLocaleString();};


//     // Loop 5 times -- add users to the users array
//     for (let i = 0; i < 5; i++) {
//     const friends = getRandomFriend(3);
//     const thoughts = getRandomThought(2);

//         const newUser = {
//             username: getRandomUsername(),
//             email: getRandomEmail(),
//             friends,
//             thoughts,
//         };
//         users.push(newUser);
//     };


//     // Loop 5 times -- add thoughts to the thoughts array
//     // for (let i = 0; i < 5; i++) {
//     // const reactions = getRandomReaction(2);

//     //     const newThought = {
//     //         thoughtText: getRandomThought(),
//     //         username: getRandomUsername(),
//     //         reactions,
//     //         CreatedAt: formatDate(today),
//     //     };
//     //     thoughts.push(newThought);
//     // };

//     await User.collection.insertMany(users);
//     // await Thought.collection.insertMany(thoughts);

//     // console.table(thoughts);
//     console.table(users);
//     console.info('Seeding complete!');
//     process.exit(0);
// });



const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomThought, getRandomReaction, getRandomFriend } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    };

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    };


  // Create empty array to hold the students
  const users = [];
  const thoughts = [];
//   const thoughts = getRandomThought(5);

  for (let i = 0; i < 20; i++) {
    const thoughtText = getRandomThought();
    const username = getRandomUsername();
    const reactions = getRandomReaction(3);

    thoughts.push({
      thoughtText,
      username,
      reactions,
    });
  }

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();
    const friends = getRandomFriend(3);

    users.push({
      username,
      email,
      friends,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
});