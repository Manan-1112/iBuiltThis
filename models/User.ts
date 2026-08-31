import mongoose,{Schema} from "mongoose";
const userSchema=new Schema(

    {
        clerkUserId:{
            type:String,
            required:true,
            unique:true
        },
        name:{
            type:String
        },
        email:{
            type:String
        }
    },
    {
        timestamps:true
    }
);
const User=mongoose.models.User || mongoose.model("User",userSchema);

export default User;