const mongoose = require('mongoose');




const locationPostsScheema = mongoose.Schema({

        id:Number,
        imageSrc: String,
        featured: Boolean,
        title: String,
        location: String,
        description: String    

});

module.exports = mongoose.model('locationScheema', locationPostsScheema);
