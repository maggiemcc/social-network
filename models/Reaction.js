const { Schema, Types } = require('mongoose');

function formatDate(time) {
  return new Date(time).toLocaleString();
}

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 200,
            default: "I suppose...",
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        toJSON: {
            // virtuals: true,
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
