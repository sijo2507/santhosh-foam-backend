const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

router.get('/:id', async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async (req, res)=>{
    try{
        const {name, description, image, sizes, category, brand} = req.body;
        if (!name || !image || !sizes || !category) {
            return res.status(400).json({ message: "Name, image, sizes, and category are required" });
        }
        const product = new Product({
            name,
            description,
            image,
            sizes,
            category,
            brand
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

router.put('/:id', async(req,res)=>{
    try{
        const updatedProduct=await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators:true}
        );
        if(!updatedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        res.json(updatedProduct);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const deletedProduct=await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            return res.status(404).json({message: "product not found"});
        }
        res.json({message: "Product deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;