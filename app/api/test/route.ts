import connectDb from "@/lib/mongodb";
export async function GET(){
    try{
        await connectDb();
        return Response.json(
            {
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