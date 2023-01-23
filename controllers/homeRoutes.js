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
        logged_in: req.session.logged_in 
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
    res.status(500).json(err);
  }
});

// Sign up router
router.get('/signup', async (req, res) => {
  try {
  res.render('signup', {})

  } catch(err) {

  }
});

// Dashboard router
router.get('/dashboard', async (req, res) => {
  try {

    const userData = await User.findByPk(1, {
      attributes: { exclude: ['password']},
      include: [{ model: Post }]
    });
    const user = userData.get({ plain: true });
    console.log(userData);
    console.log(user);


    // Why won't this work *****************************
    // const postData = await Post.findAll({
    //   where: {
    //     creator_id: 1
    //   },
    //   include: [{ model: User, attributes: { exclude: ['password'] }}]
    // });
    // const post = postData.get({ plain: true })
    // console.log(postData);
    // console.log(post);

   

    res.render('dashboard', {
      // why the ...user instead of just user
      ...user
      // logged_in: req.session.logged_in
    })

  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try { 

    res.render('postpage');

  } catch(err) {
    res.status(500).json(err);
  }

})




module.exports = router;