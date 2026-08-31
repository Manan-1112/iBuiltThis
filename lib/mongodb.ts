import mongoose from "mongoose";
const MONGODB_URI=process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("MONGODB_URI NOT DEFINED")
}
const connectDb=async()=>{
     if(mongoose.connection.readyState>=1) return;

     await mongoose.connect(MONGODB_URI);
}
export default connectDb;