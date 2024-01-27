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

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 10; i++) {    
    const newThought = {
        username: getRandomUsername(),
        thoughtText: getRandomThought(),
        reactions: getRandomReaction(1),
      };
      thoughts.push(newThought);
  }

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();
    const friends = getRandomFriend(1);

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