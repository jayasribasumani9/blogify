import * as postID from "../contollers/postController";
const express= require('express');

const router= express.Router();

router.get('/',(req,res)=>{
    res.send("Welcome to home page");
});

router.get('/:postId',postID.getPostByID);

module.exports= router;
