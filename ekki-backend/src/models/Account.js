const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AccountSchema = new Schema(
  {
    user_id: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        },
    number: {
        type: Number,
        unique: true,
        required: true,
        },
    balance: {
        type: Number,
        default: 0
        },
    limit: {
        type: Number,
        default: 500
        },
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model('Account', AccountSchema);