import { getProjectById } from "@/lib/project";
import requireAdmin from "@/lib/admin";
import mongoose from "mongoose";
export async function GET(req:Request,{params}:{params:Promise<{projectId:string}>}){
    
    const {projectId}=await params;
    if(!mongoose.Types.ObjectId.isValid(projectId)) return new Response("Invalid Project ID",{status:400})

    const project=await getProjectById(projectId);
   
    if(!project){
        return new Response("No project found",{status:404})
    }
    return Response.json(project);
    
}
