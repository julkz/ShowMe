const express = require('express');
const router = express.Router();
const Post = require ('../modules/postsmodl');


router.post('/', async (req,res) => {

    console.log("/POST  /createdLocation");
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
        res.header('Access-Control-Allow-Origin', '*');  // For CORS Policy error prevent
        res.json(savedpost);
    } catch (err) {
        res.json(err);
    }
});



module.exports = router;