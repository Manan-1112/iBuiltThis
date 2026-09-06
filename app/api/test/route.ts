import connectDb from "@/lib/mongodb";
import { currentUser } from "@clerk/nextjs/server";
export async function GET(){
    try{
        await connectDb();
        const user = await currentUser()
        if (!user) return new Response("Forbidden", { status: 403 });
        return Response.json(
            {
                user:user.id,
                name:user.fullName,
                email:user.primaryEmailAddress,
                success:true,
                msg:"MongoDB connected"
            }
        )
    }catch(err){
        console.error(err)
        return Response.json(
            {
                success:false,
                msg:"mongodb connection failed"

            },
            {status:500}
        )
    }
}