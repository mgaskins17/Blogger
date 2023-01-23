const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// Login Post Route
router.post('/login', async (req, res) => {
  try {

    const userLogin = await User.findOne({
      where: { username: req.body.username },
    });

    
    if (!userLogin) {
      res.status(400).json({
        message: "Username or Password is incorrect. Please try again",
      });
      return;
    }

    const checkPassword = await userLogin.checkPassword(req.body.password);

    if (!checkPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    res.session.save(() => {
      req.session.user_id = userLogin.id;
      req.session.logged_in = true;

      res.json({ user: userLogin, message: 'You are logged in! '})
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Sign-up Post Route
router.post('/signup', async (req, res) => {
  try {
    const userLogin = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userLogin.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userLogin,  message: 'You are logged in now! '})
    })
  
  } catch(err) {
    res.status(500).json(err);
  }
});

// Logout Route
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;