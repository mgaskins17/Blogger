// API Routes for Posts and Comments
const router = require("express").Router();
const { User, Post, Comment } = require("../../models");


// CREATE - Post Route for Creating Posts
router.post('/postit', async (req, res) => {
    try {
        // const data = {
        //     name: req.session.user_name,
        //     text: req.body.text,
        //     title: req.body.title
        // };
        const postData = await Post.create({
            creator_id: req.session.user_id,
            post_text: req.body.text,
            post_title: req.body.title
        });

        // body layout {creator_id = req.session.user_id, post_text: text input, post_title: text input}
        res.status(200).json({message: 'New Post Created!', postData});
    } catch(err) {
      res.status(500).json(err);
    }
});


// UPDATE - Post Route update for posts
router.put('postup', async (req, res) => {
    try {
        const postData = await Post.update(req.body);
        // body layout {creator_id = req.session.user_id, post_text: text input, post_title: text input}
        res.status(204).json(postData);
    } catch(err) {
        res.status(500).json(err);
    }
})

// CREATE - Post Route for Creating Comments
router.post('/commentit', async (req, res) => {
    try {
      
    } catch(err) {
        res.status(500).json(err);
    }
})










module.exports = router;