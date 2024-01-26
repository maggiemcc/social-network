const { User, Thought } = require('../models');

module.exports = {
    // GET users
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('friends');
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // GET ONE user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).populate('friends');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }

            res.json(user);
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
            console.log(err);
            return res.status(500).json(err);
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
            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }

            await Thought.deleteMany({ _id: {$in: user.friends} });
            res.json({ message: 'User & Friends successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // CREATE friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE friend
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friend: { friendId: req.params.friendId }} },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }

            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
