const express = require('express');
const router = express.Router();
const Post = require ('../modules/postsmodl');

router.get('/featured',  async (req,res) => {
    try {
        const featured = await Post.findOne({featured: true});
            console.log("/GET /featured request");
            res.header('Access-Control-Allow-Origin', '*');
            res.json(featured);
            return featured;
    } catch (err){
        res.json(err);
    }
});

router.get('/location/:id',  async (req,res) => {
    try {
        const featured = await Post.findOne({ id: req.params.id});
            console.log("/GET /location/" + req.params.id + " request");
            res.header('Access-Control-Allow-Origin', '*');
            res.json(featured);
            return featured;
    } catch (err){
        res.json(err);
    }
});

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




module.exports = router;