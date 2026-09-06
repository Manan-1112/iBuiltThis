import requireAdmin from "@/lib/admin";
import { getAllPendingProjects } from "@/lib/project";
export async function GET(){
    const userId=requireAdmin();
    if(!userId) return new Response("Forbidden",{status:403})
    
    const pendingProjects=await getAllPendingProjects();
    return  Response.json(pendingProjects,{status:200})
}