const router = require('express').Router();
const {Post, User, Comment} = require('../models');

router.get('/',async(req,res)=>{
    try{
        const postData = await Post.findAll({
            include: [User]
        })
        const posts = postData.map((post)=> post.get({plain: true}))
        res.render('home',{posts})
        
    }catch(err){
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router