const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomThought, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    const users = [];
    const thoughts = [];

    // Loop 3 times -- add users to the users array
    for (let i = 0; i < 4; i++) {
        const user = {
            username: getRandomUsername(),
            email: getRandomEmail(),
        };

        users.push(user);
    };

    for (let i = 0; i < 3; i++) {
        const thought = {
            thoughtText: getRandomThought(),
            username: getRandomUsername(),
        };

        thoughts.push(thought);
    };


    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
});
