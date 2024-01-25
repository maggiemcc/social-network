const { User, Thought } = require('../models');

module.exports = {
    // GET Thoughts
    async getAllThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // GET ONE thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' })
            }

            res.json({ thought });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // CREATE new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { thoughts: thought.id } },
                { new: true }
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'No user found with that ID :(' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // UPDATE thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res
                    .status(404)
                    .json({ message: 'No thought found with that ID :(' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE Thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No such thought exists' });
            }
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { thoughts: req.params.thoughtId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'No user found with that ID :(' });
            }
            res.json({ message: 'Thought successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
