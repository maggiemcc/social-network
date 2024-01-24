const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      unique: true,
      maxLength: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const formatDate = (timestamp => {
    return new Date(timestamp).toLocaleDateString();
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
