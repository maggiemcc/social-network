const { User, Thought } = require('../models');

module.exports = {
    // GET users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // GET ONE user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }

            res.json({ user });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // CREATE new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // UPDATE user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }

            await Thought.deleteMany({ _id: req.params.userId });
            res.json({ message: 'User & Thoughts successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
