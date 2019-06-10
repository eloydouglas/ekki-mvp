const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserTransactionSchema = new Schema(
  {
    sender_id: {
          type: Schema.Types.ObjectId,
          index: true,
          required: true,
        },
    receiver_id: {
          type: Schema.Types.ObjectId,
          index: true,
          required: true,
        },
    sender_name: {
          type: String,
          index: true,
          required: true,
        },
    receiver_name: {
        type: String,
        index: true,
        required: true,
      },
    ammount: {
        type: Number,
        required: true,
        }
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model('UserTransaction', UserTransactionSchema);