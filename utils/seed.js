const connection = require('../config/connection');
const { User, Post } = require('../models');
const { getRandomName, getRandomPost } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }

    let postCheck = await connection.db.listCollections({ name: 'posts' }).toArray();
    if (postCheck.length) {
        await connection.dropCollection('posts');
    }

    const users = [];
    const posts = getRandomPost(3);

    // Loop 5 times -- add users to the users array
    for (let i = 0; i < 5; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data
        const fullName = getRandomName();
        const first = fullName.split(' ')[0];
        const last = fullName.split(' ')[1];

        users.push({
            first,
            last,
        });
    };

    // Add to the collections and await the results
    await User.updateMany(users);
    await Post.insertMany(posts)

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.table(posts);
    console.info('Seeding complete!');
    process.exit(0);
});
