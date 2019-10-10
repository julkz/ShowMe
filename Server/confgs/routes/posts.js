const express = require('express');
const router = express.Router();
const Post = require ('../modules/postsmodl');


router.get('/', async (req,res) => {
    try {
        const post = await Post.find().limit(3);
        console.log("/GET request");
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    } catch (err){
        res.json(err);
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        id: req.body.id,
        imageSrc: req.body.imageSrc,
        featured: req.body.featured,
        title: req.body.title,
        location: req.body.location,
        description: req.body.description  
    });

    try{
        const savedpost = await post.save();
        res.json(savedpost);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;