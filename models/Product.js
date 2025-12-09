const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    sizes: [
        {
            size: {type: String},
            price: {type: Number},
            subsizes: [
                {
                    dimension: {type: String},
                    price: {type: Number}
                }
            ]
        }
    ],
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;