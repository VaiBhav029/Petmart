import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all product
//@route GET /api/product
//@acces public

const getProducts = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

    const product = await Product.find({...keyword})
    res.json(product)

})

//@desc Fetch signle product
//@route GET /api/product/:id
//@acces public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)

    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})
//@desc Dleteproduct
//@route DELETE /api/product/:id
//@acces private/admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        await product.remove()
        res.json({
            msg: "removed"
        })
    } else {
        res.status(401)
        throw new Error('Product not Found')
    }
})
//@desc creating product
//@route POST /api/products/
//@acces private/admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'sample',
        category: 'sample',
        countInStock: 0,
        numReviews: 0,
        description: 'sample'
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)

})
//@desc Update product
//@route PUT /api/products/id
//@acces private/admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description
    } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
        product.description = description

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

})
export {
    getProductById,
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct
}