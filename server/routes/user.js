const express = require('express')
const router = express.Router()
const User = require('../models/user')

// GET /user/:id to retrieve user profile
router.get('/:id', (req, res) => {
  User.find({ userId: req.params.id }, (err, profile) => {
    if (err) res.send(err)
    res.json(profile)
  })
})

// PUT /user/register to register a new user
router.put('/register', (req, res) => {
  const { userId, name, picture } = req.body
  // Verify user does not already exist
  User.findOne({ userId: userId }, (err, existingUser) => {
    if (err) res.send(err)
    if (!existingUser) {
      const registerNewUser = new User({
        userId,
        name,
        picture
      })
      User.create(registerNewUser, (err) => {
        if (err) {
          res.send(err)
        } else {
          console.log('New user registered!')
          res.send('Created!')
        }
      })
    } else {
      console.log('already exists')
      res.send('nice try buddy')
    }
  })
})

module.exports = router
