const mongoose = require("mongoose");
const Category = require('../models/category');
const slugify = require('slugify');
// const mongoose = require('mongoose')



function createCategories(categories,parentId = null){
    const categoryList = []
    let category;

    if(parentId == null){
       category = categories.filter(cat => cat.parentId == undefined)
    } else{
        category = categories.filter(cat =>cat.parentId == parentId)
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            createdAt:cate.createdAt,
            img:cate.img,
            slug: cate.slug,
            children: createCategories(categories, cate._id)
        })
    }

    return categoryList;
}

 exports.addCategory = (req,res) =>{

    const categoryObj = {
        name: req.body.name,
        img:req.body.img,
        createdAt:req.body.createdAt,
        slug: slugify(req.body.name)
    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error,category) =>{
        if(error) return res.status(400).json({ error });
        if(category){
            return res.status(200).json({ category });
        }
    })

}

exports.getCategories = (req,res) =>{
   Category.find({})

   .exec((error,categories) =>{
    if(error) return res.status(400).json({ error });


    if(categories){

        const categoryList = createCategories(categories)

        res.status(200).json({categoryList})
    }
   })
}

// get a single category 

// const singleCategories = async(req,res) =>{
    exports.singleCategories = async(req,res) =>{
    try{
        const id = req.params.id;
        const quiry = {_id: mongoose.Types.ObjectId(id)};
        const result = await Category.findOne(quiry);
        res.send(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

// module.exports = {
//     singleCategories
// }