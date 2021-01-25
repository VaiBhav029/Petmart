import mongoose from 'mongoose'

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGOURI, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`Mongodb connected :${conn.connection.host}`)
    }
    catch(err){
        console.error(`error :${err.message}`)
        process.exit(1);
    }
}
export default connectDB