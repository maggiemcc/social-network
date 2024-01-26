const { Schema, model, Type } = require('mongoose');
const friendSchema = require('./Friend');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }],
    friends: [friendSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// userSchema.virtual('friendlist').get(function () {return this.friends.length;});

const User = model('user', userSchema);
module.exports = User;
