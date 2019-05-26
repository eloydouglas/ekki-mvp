const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    name: {
        type: String,
        index: true,
        required: true,
        },
    cpf: {
        type: String,
        unique: true,
        required: true,
        },
    phone: {
        type: String,
        required: true,
        },
    contacts: {
        type: Array,
        default: []
        },
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model('User', UserSchema);