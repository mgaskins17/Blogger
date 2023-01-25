// API Routes for Posts and Comments
const router = require("express").Router();
const { User, Post, Comment } = require("../../models");


// CREATE - Post Route for Creating Posts
router.post('/postit', async (req, res) => {
    try {
        const sessTest = req.session.logged_in ? true : false;
        if (sessTest) {
            const postData = await Post.create({
                creator_id: req.session.user_id,
                post_text: req.body.text,
                post_title: req.body.title
            });
            res.status(200).json({ message: 'New Post Created!', postData });
        } else {
            res.status(401).json({ message: `You're not logged in!` });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// UPDATE - Put Route update for posts
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(
        {
            post_text: req.body.text,
            post_title: req.body.title
        },
        {
            where: {
                id: req.params.id,
            },
        })
        res.status(204).json('Update Made!');
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE - Delete Route for posts
router.delete('/:id', async (req, res) => {
    try {
        const byePost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(202).json(byePost);

    } catch (err) {
        res.status(500).json(err); 
    }
})

// CREATE - Post Route for Creating Comments
router.post('/comment', async (req, res) => {
    try {
        const sessTest = req.session.logged_in ? true : false;
        if (sessTest) {
            const commentData = await Comment.create({
                comment_text: req.body.text,
                post_id: req.body.id,
                username: req.session.username
            });

            res.status(200).json({ message: 'New Comment Created!', commentData });
        } else {
            res.status(401).json({ message: `You're not logged in!` });
        }

    } catch (err) {
        res.status(500).json(err);
    }
})





module.exports = router;