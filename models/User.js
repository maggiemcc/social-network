const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
