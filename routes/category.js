
const express = require('express');

const { addCategory, getCategories, singleCategories } = require('../controllers/category');
const router = express.Router();                                                      

router.post('/category/create', addCategory)
router.get('/category/getcategories', getCategories)
// get a single category 
router.get('/category/singleCategories/:id', singleCategories)

module.exports = router;