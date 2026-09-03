import { auth } from "@clerk/nextjs/server";
export default async function requireAdmin(){
    const {userId,has}=await auth();
    if(!userId) {
        return new Response("Not Authenticated",{status:401})
    }
    
    if(!has({role:"org:admin"})) {
        return new Response("Forbidden",{status:403})
    }
    return new Response(userId,{status:201});
}