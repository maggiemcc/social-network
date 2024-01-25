const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatData = (timestamp) => {
  return timestamp.toLocalString();
};

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatData,
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

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
