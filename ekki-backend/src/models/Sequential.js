const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const SequentialSchema = new Schema(
  {
    collectionName: {
        type: String,
        index: true,
        required: true,
        unique: true,
        },
    sequential: {
        type: Number,
        required: true,
        },
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model('Sequential', SequentialSchema);