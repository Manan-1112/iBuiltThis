import {auth} from "@clerk/nextjs/server"

export default async function requireAuth(){
    const userId= await auth();
    if(!userId) {
        return null;
    }
    return userId;
}