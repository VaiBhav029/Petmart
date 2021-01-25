import express from 'express'
const router = express.Router()
import {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
} from '../controller/productControler.js'
import {
    admin,
    protect
} from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById).put(protect, admin, updateProduct)
router.route('/:id').delete(protect, admin, deleteProduct)

export default router