const router = require('express').Router();
const { User, Post, Comment } = require('../models'); 
const withAuth = require('../utils/auth');


// This is default route for Homepage
router.get('/', async (req, res) => {
    try {

      const postData = await Post.findAll({
        include: [
          { model: User, attributes: {exclude: ["password"] } }
        ]
      });
      const posts = postData.map((post) => post.get({plain: true}));
      // Need to include getting all the posts from the post data and using the #each helper in handlebars to display them in the homepage.handlebars
      res.render('homepage', { 
        posts,
        // logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Sign in router
router.get('/login', async (req, res) => {
  try {

    res.render('login', {

    })

  } catch(err) {

  }
});

// Sign up router
router.get('/signup', async (req, res) => {
  try {

    res.render('signup', {

    })

  } catch(err) {

  }
});

// Dashboard router
router.get('/dashboard', async (req, res) => {
  try {

    // Find logged inuser based on session ID
    const postData = await Post.findAll({
      where: {
        creator_id: req.session.user_id
      }
    });

    const post = postData.get({plain: true});

    res.render('dashboard', {
      post,
      logged_in: req.session.logged_in
    })

  } catch(err) {
    res.status(500).json(err);
  }
});








module.exports = router;