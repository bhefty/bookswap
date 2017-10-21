const express = require('express')
const router = express.Router()
const User = require('../models/user')

// GET /user/:id to retrieve user profile
router.get('/:id', (req, res) => {
  User.find({ user_id: req.params.id }, (err, profile) => {
    if (err) res.send(err)
    res.json(profile)
  })
})

// PUT /user/register to register a new user
router.put('/register', (req, res) => {
  const { user_id, name, picture } = req.body
  // Verify user does not already exist
  User.findOne({ user_id: user_id }, (err, existingUser) => {
    if (err) res.send(err)
    if (!existingUser) {
      const registerNewUser = new User({
        user_id,
        name,
        picture
      })
      User.create(registerNewUser, (err) => {
        if (err) {
          res.send(err)
        } else {
          res.json({ msg: 'New user created successfully' })
        }
      })
    } else {
      res.json({ msg: 'User already exists' })
    }
  })
})

module.exports = router
