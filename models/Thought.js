const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

function formatDate(time) {
  return new Date(time).toLocaleString();
}

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
      default: "Here's a thought..."
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate,
    },
    username: {
      type: String,
      required: false,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {return this.reactions.length;});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
