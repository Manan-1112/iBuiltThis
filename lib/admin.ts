import { auth } from "@clerk/nextjs/server";
export default async function requireAdmin(){
    const {userId,has}=await auth();
    const isAdmin=has({role:"org:admin"})
    if(!userId || !isAdmin) {
        return null;
    }
   
    return userId;
}