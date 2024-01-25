const { Schema, Types } = require('mongoose');
const formatData = (timestamp) => {
    return timestamp.toLocalString();
};

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
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
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);
module.exports = reactionSchema;
