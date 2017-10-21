const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  user_id: {
    type: String,
    unique: true,
    required: true
  },
  name: { type: String },
  picture: { type: String },
  myBooks: [{ type: String, ref: 'Book' }],
  requestedBooks: [{ type: String, ref: 'Book' }],
  pendingApprovalBooks: [{ type: String, ref: 'Book' }]
})

module.exports = mongoose.model('User', UserSchema)
