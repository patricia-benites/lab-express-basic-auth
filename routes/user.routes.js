const router = require("express").Router();
const bcrypt = require('bcrypt')
const User = require('../models/User.model')


// form for creating a new user
router.get('/signup', (req, res) => {
    res.render('signup')
})


router.post('/signup', async (req, res) => {
    const user = User()
    const hash = await bcrypt.hash(req.body.password, 10)
    user.username = req.body.username;
    user.password = hash;
    try {
        await user.save()
        res.redirect('/')
      } catch (error) {
        res.redirect('/users/signup')
      }
})

module.exports = router;