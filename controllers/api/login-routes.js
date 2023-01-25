const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// Login Post Route
router.post('/login', async (req, res) => {
  try {

    console.log(req.session.logged_in);
    const userLogin = await User.findOne({
      where: { username: req.body.username },
    });

    const user = userLogin.get({ plain: true });

    console.log(user);
  
    if (!userLogin) {
      res.status(400).json({
        message: "Username or Password is incorrect. Please try again",
      });
      return;
    }

    // Doing a straight comparison for passwords at this moment - could be hashed but I'm using seeded information
    if (req.body.password != user.password) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    } else {
      console.log('It matches');
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.username = user.username;
        req.session.logged_in = true;

        res.json({ user: user, message: 'You are logged in!' });
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// Sign-up Post Route
router.post('/signup', async (req, res) => {
  try {

    // Verify username isn't taken
    const userCheck = await User.findOne({
      where: { username: req.body.username }
    });

    if (userCheck) {
      res.status(400).json({
        message: "Username taken!"});
      return;
    }

    const userLogin = await User.create({
      username: req.body.username,
      password: req.body.password
    });

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
  console.log(req.session);
  if (req.session.logged_in) {
    await req.session.destroy();
  } 
  else {
    res.status(404).end();
  }
});
module.exports = router;


module.exports = router;