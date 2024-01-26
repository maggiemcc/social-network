const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// function formatDate(time) {
//   return new Date(time).toLocaleString();
// }

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 300,
      default: "Here's a thought..."
    },
    createdAt: {
      type: Date,
      default: Date.now(),
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
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
