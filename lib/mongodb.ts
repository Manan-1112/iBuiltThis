import mongoose from "mongoose";
import dns from "dns"
const MONGODB_URI=process.env.MONGODB_URI;
dns.setServers(["1.1.1.1", "8.8.8.8"]);
if(!MONGODB_URI){
    throw new Error("MONGODB_URI NOT DEFINED")
}
const connectDb=async()=>{
     if(mongoose.connection.readyState>=1) return;

     await mongoose.connect(MONGODB_URI);
}
export default connectDb;