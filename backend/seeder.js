import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import user from './data/user.js'
import products from './data/products.js'

import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'

dotenv.config()
connectDB()
 const importData = async () =>{
    try {
        await Order.deleteMany() 
        await Product.deleteMany() 
        await User.deleteMany() 

        const createdUser = await User.insertMany(user)
        const adminUser = createdUser[0]._id

        const sampleProduct = products.map(p =>{
            return {...p,user:adminUser}
        })
        await Product.insertMany(sampleProduct)
        console.log('DATA IMPORTED')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
 }

 const destroyData = async () =>{
    try {
        await Order.deleteMany() 
        await Product.deleteMany() 
        await User.deleteMany() 
        console.log('DATA DESTROYED')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
 }
if(process.argv[2]=='-d'){
    destroyData()
}
else{
    importData()
}