const express = require('express');
const router = express.Router();
const Locs = require('../model/LocsSchema');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const bodyParser = require('body-parser');
const { request } = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


var filter = null;


//get all post
router.get('/newIn', paginationResults(Locs,"newIn"), async(req, res) => {
    res.json(res.paginationResults);
    console.log(req.query);
});

//get all post desc
router.get('/highLow', paginationResults(Locs,"highLow"), async(req, res) => {
    res.json(res.paginationResults);
    console.log(req.query);
});

//get all post asce
router.get('/lowHigh', paginationResults(Locs,"lowHigh"), async(req, res) => {
    res.json(res.paginationResults);
    console.log(req.query);
});

//submit
router.post('/', upload.single('file'), async(req,res)=> {
    
    const image = {};
    const file = req.file;

    const uploader = async (path) => await cloudinary.uploads(path, 'images');

    const newPath = await uploader(file.path);

    image.response = newPath;

    fs.unlinkSync(file.path);
   
    const post = new Locs({
        name: req.body.itemName,
        price: req.body.itemPrice,
        description: req.body.itemDescription,
        type: req.body.itemType,
        image: image.response.url
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message : err});
    }
    
});


//specific post

router.get('/:locsId/details', async (req, res) =>{
    try{
        const post = await Locs.findById(req.params.locsId);
        res.json(post)
    }catch(err){
        res.json({message : err})
    }
});


//related post

router.get('/:locsId/related', async (req, res) =>{

    try{
        const post = await Locs.aggregate(
            [
                { $match: { _id: { $nin: [req.params.locsId] } } },
                { $sample: { size: 4 } } 
            ]
        )
        res.json(post)
    }catch(err){
        res.json({message : err})
    }
});


//delete post

router.delete('/:locsId', async(req,res) =>{
    
    try{
        const removedPost = await Locs.remove({_id:req.params.locsId});
        res.json(removedPost);
    }catch(err){
        res.json({message : err});
    }
});

//update a post

router.patch('/:locsId', async(req,res) =>{
    
    try{
        const updatedPost = await Locs.updateOne(
            {_id : req.params.locsId},
            {$set : {
                name:req.body.newitems.name,
                price: req.body.newitems.price,
                description: req.body.newitems.description
            }
        
        });

        res.json(updatedPost);
    }catch(err){
        res.json({message : err});
    }
});

// middleware for limi and skip
function paginationResults(model,filter){
    return async (req, res, next) => {
        
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        const results = {}
    
    
        if (endIndex < await model.countDocuments().exec()){
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
       
        if (startIndex > 0){
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        
        if (filter=="newIn"){
        
            try{
                results.results = await model.find().limit(limit).skip(startIndex).exec()
                res.paginationResults = results;
                next();
            } catch(err){
                res.status(500).json({message : err})
            }

        } else if(filter=="highLow"){

            try{
                results.results = await model.find().sort({"price" : -1}).limit(limit).skip(startIndex).exec()
                res.paginationResults = results;
                next();
            } catch(err){
                res.status(500).json({message : err})
            }

        } else if(filter=="lowHigh"){

            try{
                results.results = await model.find().sort({"price" : 1}).limit(limit).skip(startIndex).exec()
                res.paginationResults = results;
                next();
            } catch(err){
                res.status(500).json({message : err})
            }

        }

        
    }
}

module.exports = router;