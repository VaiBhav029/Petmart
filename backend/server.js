import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {notFound,errorHandler } from './middleware/errorMiddleware.js'
const app = express()
dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000
app.use(express.json())


app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/upload',uploadRoutes)

app.use('/api/config/paypal',(req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if(process.env.MODE === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))

    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}else{
    app.get('/',(req,res)=>{
        res.send('Api is runnning')
    })
}





app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.MODE}mode in ${PORT}`)
})