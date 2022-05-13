const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router(); // using the router property in the express 
const collection = require('../models/Posts'); // geting the  collection in the database 

router.get('/' ,async (req , res)=>{
    //  geting the all data from database 
    try {
        var _all_posts = await collection.find();
        res.json(_all_posts);
    } catch (error) {
        res.json({message : error});
    }
})

// GETING A SPICIFIC POST

router.get('/:postid' ,async (req , res)=>{
    var p = await collection.findById(req.params.postid);
    res.json(p);
})

// DELETING A SPICIFIC POST

router.delete('/:postid' , async ( req , res)=>{
    try {
        var removedpost = await collection.remove({_id : req.params.postid});
        res.json(removedpost);
    } catch (error) {
        res.json({m : error});
    }
})

// UPDATE A POST

router.patch ( '/:postid' ,async (req , res )=>{
    try {
        var apdate = await collection.updateOne({_id : req.params.postid} , {$set: {title : req.body.title}}); // for alwoing update you mast specified hear to update it
        res.json( apdate);
    } catch (error) {
        res.json({e: error});
    }
})


// POST a new data into database
router.post('/' ,async (req , res)=>{
    console.log(req.body);
    
    const post = new collection ({title : req.body.title , description : req.body.description});

    var savedpost = await post.save();
    console.log(json(savedpost));

    // post.save().then(()=> console.log('jjjjj'));  ===> this is an another way to save data in the database
});




module.exports = router; // making tha all work availabel to ather pages 